
export async function loader() {
    console.log('loader!')
    return null
}

export function Component() {
    return (
        <div>Home</div>
    )
}

Component.displayName = 'HomePage'