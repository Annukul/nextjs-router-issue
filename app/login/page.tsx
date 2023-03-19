import { Protected } from "@/src/protected";

export default function Login() {
    return (
        <Protected>
            <h1>Login</h1>
        </Protected>
    )
}