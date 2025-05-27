import { Button } from '@mui/joy';


const NavbarItem = ( {item} ) => {
    return (
        <Button variant="plain">{item.name}</Button>
    )
}

export default NavbarItem