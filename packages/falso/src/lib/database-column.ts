import { rand } from './core';

export function databaseColumn() {
  return rand([
    'comment',
    'group',
    'password',
    'token',
    'phone',
    'title',
    'status',
    'id',
    'name',
    'updatedAt',
    'category',
    'email',
    'avatar',
    'createdAt',
  ]);
}
