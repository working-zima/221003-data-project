import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container, Row, Col} from "react-bootstrap";
import Bike_introduce from "./Bike_introduce.png";

import './introduce.css';

import CarbonChart1 from "../chart/CarbonChart1.js";
import CarbonChart2 from "../chart/CarbonChart2.js";
import CarbonChart3 from "../chart/CarbonChart3.js";
import CarbonChart4 from "../chart/CarbonChart4.js";
import GlobalStyle from "../GlobalStyle";


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography align='left'>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Introduce() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <GlobalStyle />
    <div class="RegisterDiv"></div>
    <Container fluid className="container">
      
      <Box sx={{ width: '100%',marginTop: "50px"}}>
        <Box sx={{ borderBottom: 1, borderColor: '#999' }}>
          <Tabs value={value} onChange={handleChange} centered >
          
              <Tab label="πνμλ°°μΆκ³Ό κ°λ­ λ° κΈ°μ¨ μ΄μ" {...a11yProps(0)} style={{color: "black", fontSize: "18px", fontWeight: "bold"}}/>
            

           
              <Tab label="πκ΅ν΅λΆλ¬Έμμμ νμλ°°μΆ" {...a11yProps(1)} style={{color: "black", fontSize: "18px", fontWeight: "bold"}}/>
            

            
              <Tab label="π²νμλ°°μΆμ μ€μΌ μ μλ λ°©λ²" {...a11yProps(2)} style={{color: "black", fontSize: "18px", fontWeight: "bold"}}/>
           
          </Tabs>
        </Box>

          
            <TabPanel value={value} index={0}>
              <div className='Container'>
                <div className='textContainer'>
                  <br/>
                  <br/>
                  <p className='text2'>
                  <p className='text1'>νμλ°°μΆ νν©</p>
                  νκ²½λΆμμ λ°μ β2018~2020 μ¨μ€κ°μ€ κ°μΆ μ΄νμ€μ  νκ°βλ₯Ό λ³΄λ©΄,
                  <br/>
                  μ΄ κΈ°κ° μ°λ¦¬λλΌμμ λ°°μΆλ μ¨μ€κ°μ€λ 
                  <span style={{
                      fontWeight: "bold"
                      }}>
                    μ°νκ·  6μ΅9230λ§ν€
                    </span>
                    μΌλ‘
                  <br/>
                  λͺ©νμΉ 6μ΅9090λ§ν€λ³΄λ€ 140λ§ν€(0.2%) λ§μμ΅λλ€
                  <br/>
                    2019λκ³Ό 2020λμλ κ°κ° μ λλ³΄λ€ 3.5%μ 7.5% μ€λ©° 
                    <br/>
                  κ°μΆ λͺ©νλ₯Ό λ¬μ±νμΌλ, 
                  <br/>
                  2018λ λ°°μΆλμ΄ {""}
                  <span style={{fontWeight: "bold"}}>μ­λ μ΅κ³ μΈ 7μ΅2700λ§ν€</span>
                  μ λ¬νλ©΄μ 
                  <br/>
                  κ²°κ³Όμ μΌλ‘ μ°νκ·  νμ λ°°μΆμ΄ λμ± μ¦κ°νμ΅λλ€
                  <br/>
                  <span 
                    style={{
                      fontWeight: "bold",
                      fontSize:"15px",
                      color: "#999999"
                      }}>
                    (νκ²½λΆ)
                  </span>
                  </p>

                  <br/>
                  <br/>
                  <br/>
                  <br/>

                  <p className='text1'>νμλλλ‘ μΈν κ°λ­κ³Ό κΈ°μ¨μ΄μ</p>
                  <p className='text2'>μ°μνλͺμ ν΅ν΄ μΈλ₯κ° μν, μμ  λ± νμμλμ§λ₯Ό μ¬μ©νκΈ° μμνλ©΄μ, λκΈ° μ€μ λ°°μΆλλ μ΄μ°ννμκ° κΈμ¦νκΈ° μμνμ΅λλ€
                  <br/>
                  <span style={{
                      fontWeight: "bold"
                      }}>
                    μ€λλ  λκΈ° μ€ μ΄μ°ννμμ μμ 19μΈκΈ°μ λΉν΄ 33% μ¦κ°νμκ³  μ§κ΅¬μ νκ·  μ¨λλ 0.6~0.7λ μ΄μ μμΉνμ΅λλ€
                  </span>
                  <br/>
                  <br/>
                  μ΄μ°ννμ λλ μ¦κ° μν₯μ νλ°λμμ νΉν κ°νκ² λνλκ³  μμ΅λλ€ 
                  <br/>
                  νκ΅­ κΈ°νλ³ν νκ° λ³΄κ³ μμ λ°λ₯΄λ©΄, {""}
                  <span style={{
                      fontWeight: "bold"
                      }}>
                    
                    μ°λ¦¬λλΌμ κ°λ­, μ§μ€νΈμ°, κΈ°μνμ μ¦κ°, ν­μΌ μ¬λ§μμ μλ λ₯΄κΈ° νμ μ¦κ° {""}
                  </span>
                  λ±μ νΌν΄λ₯Ό κ°μ Έμ€λ¦¬λΌ μμΈ‘λκ³  μμ΅λλ€
                  <br/>
                  <span 
                    style={{
                      fontWeight: "bold",
                      fontSize:"15px",
                      color: "#999999"
                      }}>
                    (κΈ°μμ²­)
                  </span>
                  </p>
                </div>

                <Row>
                  <Col>
                    <div className='chartDeliver'>
                      <CarbonChart1 />
                    </div>
                    <div className='chartDeliver'>
                    <CarbonChart2 />
                    </div>
                  </Col>
                </Row>
              </div>  
            </TabPanel>
            

        
          <TabPanel value={value} index={1}>
          <div className='Container1'>
                <div className='textContainer1'>
                  <br/>
                  <br/>
                  <p className='text1'>κ΅ν΅λΆλ¬Έμμμ νμλ°°μΆ</p>
                  <p className='text2'>μ°λ¦¬λλΌ μ¨μ€κ°μ€λ₯Ό λ°°μΆνλ λΆμΌ μ€
                  <br/>
                  κ°μ₯ λ§μ΄ μ°¨μ§νλ λΆμΌλ 
                  <span style={{
                      fontWeight: "bold"
                      }}>κ΅ν΅λΆλ¬Έ</span>
                  μλλ€
                  <br/>
                  κ΅ν΅λΆλ¬Έ μ€μμλ {""}
                  <span style={{
                      fontWeight: "bold"
                      }}>λλ‘μ μ¨μ€κ°μ€ λ°°μΆλΉμ¨μ λ¬΄λ € 96%μ΄λ©°,
                  </span>
                  <br/>
                  μ¬λλ€μ΄ νκ³  λ€λλ μΉμ©μ°¨λ μ μ²΄ κ΅ν΅λΆλ¬Έ νμ λ°°μΆ μ€ 
                  <br/>
                  <span style={{
                      fontWeight: "bold"
                      }}>47%</span>
                  λ₯Ό μ°¨μ§νκ³  μμ΅λλ€                               
                  <br/>
                  <span 
                    style={{
                      fontWeight: "bold",
                      fontSize:"15px",
                      color: "#999999"
                      }}>
                    (νκ²½λΆ)
                  </span>
                  </p>
                </div>
 
                <div className='chartDeliver1'>
                  <CarbonChart3 />
                </div>
               
              </div>  
          </TabPanel>


          <TabPanel value={value} index={2}>
          <div className='Container'>
                <div className='textContainer'>
                  
                  
                  <p className='main'>
                    μ°λ¦¬λ μμ κ±° νκΈ°λ₯Ό μΌμννλ©΄μ
                    <br/>
                    κ°μ΄ νμλ°°μΆμ μ€μ¬ λ³΄λ©΄ μ΄λ¨κΉμ?
                  </p>

                  <br/>
                  
                  <p className='text1'>νμλ°°μΆμ μ€μΌ μ μλ λ°©λ²</p>
    
                  <p className='text2'>
                  κ΅­μ νμ μ§ (νκ²½μ°κ΅¬νλ³΄)(Environment Research Letters)μ κ²μ¬λ
                  λΌλ¬Έμμ μ°κ΅¬νμ μλμ°¨λ₯Ό μ΄μ©νμ§ μμΌλ©΄ 
                  
                  ν μ¬λμ΄ {""} 
                  <span style={{
                      fontWeight: "bold"
                      }}>
                    μ°κ° 2.04ν€COβeq
                  </span>
                  μ μ€μΌ μ μλ€κ³  λΆμκ²°κ³Όλ₯Ό λμΆνμ΅λλ€. 
                  <br/> 
          
                  </p>
                  <p className='text2'>
                  λΌλ¬Έμ μ£Όμ μλ {""}
                  <span style={{
                      fontWeight: "bold"
                      }}>νμλ°°μΆλ‘ μΈν νκ²½μ€μΌμ΄ μ§μλκ³  μλ€λ μν©μ μΈμνλ€λ©΄
                  </span> {""}
                  μ΄λ₯Ό λ§κΈ° μν΄μ μ¬λλ€μ μ°¨λμ μ΄μ©νλ λμ 
                  <br/> 
                  <span style={{
                      fontWeight: "bold"
                      }}>
                    λμ€κ΅ν΅ μ΄μ©μ΄λ, κ±·κΈ°, μμ κ±° νκΈ°
                  </span> 
                  λ±μ νλμ  λ³νκ° μ΄λ£¨μ΄μ§ μ μλ€β λΌκ³  λ§νμ΅λλ€.
                  <br/>
                  <span 
                    style={{
                      fontWeight: "bold",
                      fontSize:"15px",
                      color: "#999999"
                      }}>
                    (νκ²½μ°κ΅¬νλ³΄)
                  </span>
                  </p>

                  <br/>
                  <br/>

                  <p className='text1'>μμ κ±°λ₯Ό ν΅ν΄ νμλ°°μΆλ μ€μ΄κΈ°</p>
                  <p className='text2'> λ€λλλ κ΅­λ―Όλ€μ νλ£¨ νκ·  2.6γλ₯Ό μμ κ±°λ‘ μ΄λν  λ§νΌ μμ κ±°λ₯Ό μΌμμ μΌλ‘ νκ³  μμ΅λλ€.
                  <br/>
                  μμ κ±°λ₯Ό κ΅ν΅μλ¨μΌλ‘ μ°λ μνλ°©μμ΄ μ  μΈκ³μ μΌλ‘ νμ°λ  κ²½μ°
                  <br/> 
                  <span style={{
                      fontWeight: "bold"
                      }}>μ°κ° νμλ°°μΆλμ΄ μ½ 6μ΅8600λ§t κ°μ
                   </span>   
                  ν  μ μλ€κ³  ν©λλ€
                  <br/>


                  

                  <br/>
                  </p>
                </div>
                
                <Row>
                  <Col>
                    <div className='chartDeliver2'>
                      <CarbonChart4 />
                    </div>
                    <div className='chartDeliver2'>
                      <img src={Bike_introduce} 
                      style={{
                        width: "250px",
                        marginLeft: "120px"
                        }}/>
                    </div>
                  </Col>
                </Row>
              </div>  
          </TabPanel>
  
      </Box>
    </Container>
    </>
    ); 
}
