import { rand } from './core';

export function databaseType() {
  return rand([
    'tinyint',
    'date',
    'timestamp',
    'set',
    'datetime',
    'enum',
    'binary',
    'bigint',
    'point',
    'smallint',
    'text',
    'bit',
    'decimal',
    'varchar',
    'mediumint',
    'double',
    'time',
    'blob',
    'geometry',
    'boolean',
    'serial',
    'real',
    'float',
  ]);
}
