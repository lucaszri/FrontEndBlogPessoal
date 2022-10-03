import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';



function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar className='barraTab' position="static">
          <Tabs onChange={handleChange}>
            <Tab className='btnMargin' label="Todas as postagens" value="1"/>
            <Tab className='btnMargin' label="Sobre nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel className='btnTab' value="1" >
          <Box className='btnTab'>
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel className='sobreHome' value="2">
          <Typography className='sobremimh1'>Sobre mim</Typography>
          <Typography className='sobremimTxt'>Aliquam ut diam lorem. Donec interdum porttitor lacus ut faucibus. Maecenas tempor dolor faucibus tortor convallis pharetra. Ut facilisis mauris tincidunt arcu vestibulum, imperdiet placerat massa egestas. Donec dui tellus, tincidunt luctus est a, viverra dapibus nisl. Vestibulum iaculis magna quis risus tempor lacinia. Cras congue, erat at aliquam luctus, nisl nulla molestie erat, nec molestie massa neque sit amet velit. Pellentesque id libero sed dolor ornare aliquam a eget mauris. Donec tellus mi, bibendum eget vulputate scelerisque, lobortis in urna. Donec ante lectus, feugiat vel nisi vitae, ultrices dapibus dolor. Duis ac risus quam. Nullam hendrerit semper dui, sit amet egestas turpis mattis vitae. Morbi cursus porta porta. Aliquam felis odio, imperdiet sit amet condimentum vitae, faucibus a nulla. Nunc cursus semper enim, et cursus orci auctor vitae. Ut ante sem, fringilla id ultrices in, faucibus a erat.</Typography>
          <Typography className='sobremimTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus tortor, varius nec semper eget, porta ut urna. Nullam a interdum tortor. Praesent interdum dictum pellentesque. Curabitur faucibus in enim et ornare. Ut sit amet augue ligula. Proin quis pharetra tellus. Maecenas tincidunt semper quam, et fringilla nisl egestas in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mattis ullamcorper est eu suscipit. Sed vitae justo rhoncus, iaculis nunc id, dapibus felis. Suspendisse non neque sed odio sollicitudin facilisis id sit amet odio. Vestibulum sodales quam at nulla scelerisque gravida.</Typography>
          <Typography className='sobremimTxt'>Donec lorem erat, rhoncus in bibendum et, fringilla quis nibh. Maecenas id posuere massa, ut luctus ipsum. Proin tempus odio sit amet arcu tincidunt, sit amet dignissim erat luctus. Etiam eget ex a quam tristique interdum. Sed a quam et quam imperdiet varius at eu libero. Phasellus vel gravida nibh. Aenean placerat ornare quam, sit amet ultricies ipsum. Ut vestibulum sollicitudin faucibus. Morbi vel nisi dui. Maecenas aliquam suscipit velit at auctor. Praesent hendrerit purus eu lacus rhoncus, eget viverra nunc auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;