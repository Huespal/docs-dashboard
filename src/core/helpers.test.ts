import { checkTimeTravel, getRelativeDate } from '@/core/helpers';
import { describe, expect, test } from 'vitest';

describe('core > helpers > getRelativeDate', () => {
  const now = '2025-04-23T17:14:00Z';
  test('Returns a relative date string in years'
    + ' given a years beforevalid date string', () => {
      const date = '2008-04-23T17:14:00Z';
      expect(getRelativeDate(date, now)).toEqual('18 years ago');
    });
  test('Returns a relative date string in months'
    + 'given a months before valid date string', () => {
      const date = '2024-08-23T17:14:00Z';
      expect(getRelativeDate(date, now)).toEqual('9 months ago');
    });
  test('Returns a relative date string in days'
    + ' given a days before valid date string', () => {
      const date = '2025-04-20T17:14:00Z';
      expect(getRelativeDate(date, now)).toEqual('3 days ago');
    });
  test('Returns \'yesterday\' string'
    + ' given a day before valid date string', () => {
      const date = '2025-04-22T17:14:00Z';
      expect(getRelativeDate(date, now)).toEqual('yesterday');
    });
  test('Returns \'today\' string given a same day valid date string', () => {
    const date = '2025-04-23T17:14:00Z';
    expect(getRelativeDate(date, now)).toEqual('today');
  });
});

describe('core > helpers > checkTimeTravel', () => {
  test('Returns the \'Time travel!\' string given an update'
    + ' date string value from before creation date string value', () => {
      const createdAt = '2025-04-23T17:14:00Z';
      const updatedAt = '2024-04-23T17:14:00Z';
      expect(checkTimeTravel(createdAt, updatedAt)).toEqual('Time travel!');
    });
  test('Returns an empty string given an update'
    + ' date string value from after creation date string value', () => {
      const createdAt = '2024-04-23T17:14:00Z';
      const updatedAt = '2025-04-23T17:14:00Z';
      expect(checkTimeTravel(createdAt, updatedAt)).toEqual('');
    });
});