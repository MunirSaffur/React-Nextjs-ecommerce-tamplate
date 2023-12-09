import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from 'next/link';

export default function NavBarItem({data}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="navbar-item">
            {data && data.name}
            <ExpandMoreIcon />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data.children.map((child, index)=>(
              <Menu.Item key={index}>
              <Link
                href={'/category/'+child.name}
                className='text-gray-700 block px-4 py-2 text-sm'
              >
                {child.name}
              </Link>
          </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
