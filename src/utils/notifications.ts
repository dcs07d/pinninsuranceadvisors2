import { supabase } from './supabase';

interface NotificationData {
  type: 'email' | 'sms';
  recipient: string;
  template: string;
  data: Record<string, any>;
}

interface QuizSubmission {
  name: string;
  email: string;
  phone: string;
  recommendedPlan: 'medigap' | 'advantage';
  score: {
    medigap: number;
    advantage: number;
  };
  answers: Record<string, string>;
}

export async function sendNotification(notification: NotificationData) {
  try {
    // Create notification record
    const { data: notificationRecord, error: dbError } = await supabase
      .rpc('create_notification', {
        p_type: notification.type,
        p_recipient: notification.recipient,
        p_template: notification.template,
        p_data: notification.data
      });

    if (dbError) throw dbError;

    // Call edge function to send notification
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/notifications`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(notification)
      }
    );

    if (!response.ok) {
      throw new Error('Failed to send notification');
    }

    return { success: true };
  } catch (error) {
    console.error('Notification error:', error);
    return { success: false, error };
  }
}

export async function notifyQuizCompletion(submission: QuizSubmission) {
  try {
    // Send email notification
    await sendNotification({
      type: 'email',
      recipient: submission.email,
      template: 'quiz_completion',
      data: {
        name: submission.name,
        recommendedPlan: submission.recommendedPlan
      }
    });

    // Send SMS notification if phone provided
    if (submission.phone) {
      await sendNotification({
        type: 'sms',
        recipient: submission.phone,
        template: 'quiz_completion',
        data: {
          name: submission.name,
          recommendedPlan: submission.recommendedPlan
        }
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Quiz completion notification error:', error);
    return { success: false, error };
  }
}