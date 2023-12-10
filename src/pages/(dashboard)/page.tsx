export async function loader() {
    console.log('loader!')
    return null
}

export function Component() {
    return (
        <div>Dashboard</div>
    )
}