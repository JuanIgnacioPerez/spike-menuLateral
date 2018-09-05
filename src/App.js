import React, { PureComponent } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import logo from './logo.svg';
import './react-sidenav.css';
import './App.css';


export default class extends PureComponent {
  state = {
    selected: 'home',
    expanded: false
  };

  onSelect = (selected) => {
    this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };

  navigate = (pathname) => () => {
    this.setState({ selected: pathname });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
            <SideNav.Toggle />
            <SideNav.Nav selected={selected}>

              <NavItem eventKey="inicio">
                <NavIcon>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Inicio">
                  Inicio
                </NavText>
              </NavItem>

              <NavItem eventKey="solicitar">
                <NavIcon>
                  <i className="fa fa-calendar-check-o" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Solicitar">
                  Solicitar
                </NavText>

                <NavItem eventKey="solicitar/permisos" style={{ textAlign: 'left' }}>
                  <NavText title="Permisos">
                    Permiso
                  </NavText>
                  <NavItem eventKey="solicitar/permisos/personales" style={{ textAlign: 'left' }}>
                    <NavText title="Personales">
                      Personal
                    </NavText>
                  </NavItem>
                  <NavItem eventKey="solicitar/permisos/medicos" style={{ textAlign: 'left' }}>
                    <NavText title="Medicos">
                      Medico
                    </NavText>
                  </NavItem>
                </NavItem>

                <NavItem eventKey="solicitar/vacaciones" style={{ textAlign: 'left' }}>
                  <NavText title="Vacaciones">
                    Vacaciones
                    <NavItem className="submenu">
                      <NavText>
                         >  Solicitar vacaciones
                      </NavText>
                    </NavItem>
                    <NavItem className="submenu">
                      <NavText>
                         >  Mis solicitudes
                      </NavText>
                    </NavItem>
                  </NavText>
                </NavItem>
              </NavItem>

              <NavItem eventKey="consultar">
                <NavIcon>
                  <i className="fa fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Consultar">
                  Consultar
                </NavText>
                <NavItem eventKey="consultar/historialVacaciones" style={{ textAlign: 'left' }}>
                  <NavText title="Historial-de-vacaciones">
                    Historial de vacaciones
                  </NavText>
                </NavItem>
                <NavItem eventKey="consultar/historialPermisos" style={{ textAlign: 'left' }}>
                  <NavText title="Historial-de-permisos">
                    Historial de permisos
                    <NavItem className="submenu">
                      <NavText>
                         >  Permisos personales
                      </NavText>
                    </NavItem>
                    <NavItem className="submenu">
                      <NavText>
                         >  Permisos medicos
                      </NavText>
                    </NavItem>
                  </NavText>
                </NavItem>
              </NavItem>

              <NavItem eventKey="incapacidades">
                <NavIcon>
                  <i className="fa fa-ambulance" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Incapacidades">
                  Incapacidades
                </NavText>
              </NavItem>

            </SideNav.Nav>
          </SideNav>
        </div>
      </div>
    );
  }
}
