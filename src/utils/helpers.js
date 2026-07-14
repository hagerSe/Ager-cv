// ============================================
// 1. ANIMATIONS & SCROLL EFFECTS
// ============================================

/**
 * Sets up Intersection Observer for scroll animations
 */
export const setupScrollAnimations = () => {
  if (typeof IntersectionObserver === 'undefined') {
    console.warn('IntersectionObserver not supported');
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (entry.target.classList.contains('scroll-animate')) {
            entry.target.classList.add('visible');
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
};

/**
 * Smooth scroll to top
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Smooth scroll to element by ID
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Get current scroll position
 */
export const getScrollPosition = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

// ============================================
// 2. STRING HELPERS
// ============================================

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Capitalize first letter of each word
 */
export const capitalizeWords = (text) => {
  if (!text) return '';
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Capitalize first letter only
 */
export const capitalizeFirst = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Convert to slug for URLs
 */
export const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Remove HTML tags from string
 */
export const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

// ============================================
// 3. DATE HELPERS
// ============================================

/**
 * Format date to readable string
 */
export const formatDate = (date, format = 'long') => {
  if (!date) return 'N/A';
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return 'Invalid Date';

  const options = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    time: { hour: '2-digit', minute: '2-digit' },
  };

  return dateObj.toLocaleDateString('en-US', options[format] || options.long);
};

/**
 * Get relative time (e.g., "2 hours ago")
 */
export const timeAgo = (date) => {
  if (!date) return 'N/A';
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return 'Invalid Date';

  const now = new Date();
  const diffInSeconds = Math.floor((now - dateObj) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }
  return 'Just now';
};

/**
 * Check if date is today
 */
export const isToday = (date) => {
  const today = new Date();
  const compareDate = new Date(date);
  return (
    today.getFullYear() === compareDate.getFullYear() &&
    today.getMonth() === compareDate.getMonth() &&
    today.getDate() === compareDate.getDate()
  );
};

/**
 * Get age from birthdate
 */
export const getAge = (birthdate) => {
  const today = new Date();
  const birth = new Date(birthdate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

// ============================================
// 4. VALIDATION HELPERS
// ============================================

/**
 * Validate email address
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Ethiopian phone number
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^(\+251|0)?[9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate URL
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if string is empty
 */
export const isEmpty = (str) => {
  return !str || str.trim().length === 0;
};

/**
 * Check if string is a valid number
 */
export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

// ============================================
// 5. GENERATORS
// ============================================

/**
 * Generate random ID
 */
export const generateId = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

/**
 * Generate random color
 */
export const randomColor = () => {
  const colors = [
    '#2563eb', '#7c3aed', '#db2777', '#dc2626',
    '#ea580c', '#65a30d', '#16a34a', '#0891b2',
    '#4f46e5', '#9333ea', '#ec4899', '#f43f5e',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Generate random number between min and max
 */
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ============================================
// 6. OBJECT HELPERS
// ============================================

/**
 * Deep clone an object
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if object is empty
 */
export const isObjectEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * Pick specific keys from object
 */
export const pick = (obj, keys) => {
  return keys.reduce((result, key) => {
    if (obj && obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
};

/**
 * Omit specific keys from object
 */
export const omit = (obj, keys) => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

// ============================================
// 7. ARRAY HELPERS
// ============================================

/**
 * Shuffle an array
 */
export const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/**
 * Group array by a key
 */
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

/**
 * Get unique values from array
 */
export const unique = (array) => {
  return [...new Set(array)];
};

/**
 * Chunk array into smaller arrays
 */
export const chunk = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

// ============================================
// 8. STORAGE HELPERS (LocalStorage)
// ============================================

/**
 * Set item with expiration (in minutes)
 */
export const setStorageItem = (key, value, ttl = null) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
      ttl: ttl ? ttl * 60 * 1000 : null,
    };
    localStorage.setItem(key, JSON.stringify(item));
    return true;
  } catch (error) {
    console.error('Error setting storage item:', error);
    return false;
  }
};

/**
 * Get item from storage
 */
export const getStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const parsed = JSON.parse(item);
    
    // Check if expired
    if (parsed.ttl && Date.now() - parsed.timestamp > parsed.ttl) {
      localStorage.removeItem(key);
      return null;
    }
    
    return parsed.value;
  } catch (error) {
    console.error('Error getting storage item:', error);
    return null;
  }
};

/**
 * Remove item from storage
 */
export const removeStorageItem = (key) => {
  localStorage.removeItem(key);
};

/**
 * Clear all storage
 */
export const clearStorage = () => {
  localStorage.clear();
};

// ============================================
// 9. BROWSER / DEVICE HELPERS
// ============================================

/**
 * Check if device is mobile
 */
export const isMobile = () => {
  return window.innerWidth < 768;
};

/**
 * Check if device is tablet
 */
export const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Check if device is desktop
 */
export const isDesktop = () => {
  return window.innerWidth >= 1024;
};

/**
 * Check if dark mode is active
 */
export const isDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Detect browser name
 */
export const getBrowser = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('Opera')) return 'Opera';
  return 'Unknown';
};

// ============================================
// 10. DOM HELPERS
// ============================================

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    return false;
  }
};

/**
 * Download file from URL
 */
export const downloadFile = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || 'download';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Get element dimensions
 */
export const getElementDimensions = (element) => {
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    bottom: rect.bottom,
    right: rect.right,
  };
};

// ============================================
// 11. FORM HELPERS
// ============================================

/**
 * Format form data for API submission
 */
export const formatFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });
  return formData;
};

/**
 * Get form values as object
 */
export const getFormValues = (form) => {
  const formData = new FormData(form);
  const values = {};
  for (let [key, value] of formData.entries()) {
    values[key] = value;
  }
  return values;
};

// ============================================
// 12. EXPORT ALL
// ============================================

// Default export for convenience
const helpers = {
  // Animations
  setupScrollAnimations,
  scrollToTop,
  scrollToElement,
  getScrollPosition,
  
  // Strings
  truncateText,
  capitalizeWords,
  capitalizeFirst,
  slugify,
  stripHtml,
  
  // Dates
  formatDate,
  timeAgo,
  isToday,
  getAge,
  
  // Validation
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isEmpty,
  isNumber,
  
  // Generators
  generateId,
  randomColor,
  randomNumber,
  
  // Objects
  deepClone,
  isObjectEmpty,
  pick,
  omit,
  
  // Arrays
  shuffleArray,
  groupBy,
  unique,
  chunk,
  
  // Storage
  setStorageItem,
  getStorageItem,
  removeStorageItem,
  clearStorage,
  
  // Browser
  isMobile,
  isTablet,
  isDesktop,
  isDarkMode,
  getBrowser,
  
  // DOM
  copyToClipboard,
  downloadFile,
  getElementDimensions,
  
  // Forms
  formatFormData,
  getFormValues,
};

export default helpers;