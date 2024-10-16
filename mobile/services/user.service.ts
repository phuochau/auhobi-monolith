import dayjs from "dayjs"

class UserServiceClass {
  formatDate(date: string): string {
    return dayjs(date).format('DD MMM, YYYY')
  }
}

export const userService = new UserServiceClass()