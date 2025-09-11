export async function openTixaeChat(): Promise<boolean> {
  // Wait for a short delay to ensure the widget is loaded
  await new Promise(resolve => setTimeout(resolve, 100));

  // Find and click the Tixae chat button
  const tixaeContainer = document.getElementById('VG_OVERLAY_CONTAINER');
  if (tixaeContainer) {
    const chatButton = tixaeContainer.querySelector('button');
    if (chatButton) {
      chatButton.click();
      return true;
    }
  }
  return false;
}

export function initializeTixaeChat(retries = 0, maxRetries = 10): Promise<boolean> {
  return new Promise((resolve) => {
    if (retries >= maxRetries) {
      resolve(false);
      return;
    }

    const tixaeContainer = document.getElementById('VG_OVERLAY_CONTAINER');
    if (tixaeContainer?.querySelector('button')) {
      resolve(true);
    } else {
      setTimeout(() => {
        initializeTixaeChat(retries + 1, maxRetries).then(resolve);
      }, 500);
    }
  });
}