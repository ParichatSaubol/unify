import { BookingStatus } from '@/model/options';

type Booking = {
  id?: number;
  name?: string;
  description?: string;
  number?: number;
  amount?: number;
  bookingDate?: string;
  serviceDate?: string;
  status?: BookingStatus;
  customerContact?: {
    name?: string;
    company?: string;
    tel?: string;
    address?: string;
  };
};

export type { Booking };
