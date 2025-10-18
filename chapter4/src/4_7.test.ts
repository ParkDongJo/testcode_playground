import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'

const greetByTime = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

describe('greetByTime', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return "Good morning" if the hour is less than 12', () => {
    vi.setSystemTime(new Date('2025-01-01T00:00:00'));
    expect(greetByTime()).toBe('Good morning');
  });

  it('should return "Good afternoon" if the hour is less than 18', () => {
    vi.setSystemTime(new Date('2025-01-01T12:00:00'));
    expect(greetByTime()).toBe('Good afternoon');
  });

  it('should return "Good evening" if the hour is greater than or equal to 18', () => {
    vi.setSystemTime(new Date('2025-01-01T18:00:00'));
    expect(greetByTime()).toBe('Good evening');
  });
});