import { formatDistanceToNow } from 'date-fns';

export function DateFormat(date: Date) {
  const dateFormatted = formatDistanceToNow(date, { addSuffix: true });

  return dateFormatted;
}
