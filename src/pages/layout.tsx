import { Outlet } from 'react-router';

export async function loader() {
    console.log('loader!')
    return null
}

export function Component() {
    return (
        <>
            <div>Root Layout</div>
            <Outlet />
        </>
    )
}