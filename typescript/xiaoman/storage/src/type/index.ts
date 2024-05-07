// expire 过期时间key permanent 永久不过期
import { Dictionaries } from '../enum'
export type Key = string
export type Expire = Dictionaries.permanent | number // 时间戳 或者 Dictionaries.permanent
export interface Result<T> {
  message: string
  value: T | null
}
export interface Data<T> {
  value: T
  [Dictionaries.expire]: Dictionaries.expire | number
}
export interface StorageCls {
  get: <T>(key: Key) => Result<T | null>
  set: <T>(key: Key, value: T, expire: Expire) => void
  remove: (key: Key) => void
  clear: () => void
}
