export function getOrderTimeStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;

  const startTime = 6 * 60;      // 6:00 AM
  const endTime = 9 * 60 + 30;   // 9:30 AM

  if (currentTimeInMinutes >= startTime && currentTimeInMinutes <= endTime) {
    return {
      isOpen: true,
      message: "🟢 Ordering is OPEN (Closes at 9:20/9:30 AM)"
    };
  } else {
    return {
      isOpen: false,
      message: "🔴 Ordering is CLOSED. Opens tomorrow at 6:00 AM"
    };
  }
}