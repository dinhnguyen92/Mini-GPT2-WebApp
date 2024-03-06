import { NavLink, useLocation } from 'react-router-dom';
import { Icon, Menu, MenuItem, SemanticICONS } from 'semantic-ui-react';
import { FrontEndPaths } from '../../../router/Routes';

export default function SideMenu() {

  const { pathname } = useLocation();

  const menuStyle = {
    height: '100vh',
    borderRadius: '0'
  }

  const menuItemStyle = {
    width: '100%',
    borderRadius: '0',
    padding: '20px'
  }

  const items = [
    {
      text: 'Generator',
      icon: 'pencil',
      path: FrontEndPaths.homePath
    },
    {
      text: 'Architecture',
      icon: 'sitemap',
      path: FrontEndPaths.architecturePath
    },
    {
      text: 'Training Corpus',
      icon: 'book',
      path: FrontEndPaths.trainingCorpusPath
    }
  ]

  return (
    <Menu
      vertical
      fluid
      inverted
      style={menuStyle}
    >
      {items.map(item => {
        const isActive = pathname === item.path
        return (
          <MenuItem
            style={menuItemStyle}
            as={NavLink}
            to={item.path}
            active={isActive}
          >
            <Icon name={item.icon as SemanticICONS} color={isActive ? 'teal' : undefined}/>
            {item.text}
          </MenuItem>
        )
      })}
    </Menu>
  )
}