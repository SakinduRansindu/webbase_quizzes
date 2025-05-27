/**
 * Quiz Zone - Common utility functions
 */

/**
 * Display a notification toast message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification: 'success', 'error', 'warning', 'info'
 * @param {number} duration - How long to show the notification in milliseconds
 */
function showNotification(message, type = 'info', duration = 3000) {
  // Create notification element if it doesn't exist
  let notification = document.getElementById('notification-toast');
  
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification-toast';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '4px';
    notification.style.fontWeight = 'bold';
    notification.style.zIndex = '1000';
    notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(10px)';
    document.body.appendChild(notification);
  }
  
  // Set appearance based on type
  switch (type) {
    case 'success':
      notification.style.backgroundColor = '#4CAF50';
      notification.style.color = 'white';
      break;
    case 'error':
      notification.style.backgroundColor = '#F44336';
      notification.style.color = 'white';
      break;
    case 'warning':
      notification.style.backgroundColor = '#FF9800';
      notification.style.color = 'white';
      break;
    default: // info
      notification.style.backgroundColor = '#2196F3';
      notification.style.color = 'white';
  }
  
  // Set message
  notification.textContent = message;
  
  // Show notification
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
  }, 10);
  
  // Hide notification after duration
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(10px)';
  }, duration);
}

/**
 * Get query parameter from URL
 * @param {string} name - The name of the query parameter
 * @returns {string|null} - The value of the parameter or null if not found
 */
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

/**
 * Format a date string
 * @param {Date|string} date - Date object or date string
 * @param {string} format - Format string: 'short', 'medium', 'long'
 * @returns {string} - Formatted date string
 */
function formatDate(date, format = 'medium') {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) {
    return 'Invalid date';
  }
  
  switch (format) {
    case 'short':
      return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    case 'long':
      return d.toLocaleDateString(undefined, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    default: // medium
      return d.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
  }
}

/**
 * Shuffle an array (Fisher-Yates algorithm)
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled array (modifies original)
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Export functions if using as a module
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    showNotification,
    getQueryParam,
    formatDate,
    shuffleArray
  };
}
