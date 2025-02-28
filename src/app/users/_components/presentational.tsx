import type { Users } from "../_utils/user-schema"

type Props = {
  users: Users
}

export const Presentational = ({ users }: Props) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="p-8">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
    </div>
  )
}
