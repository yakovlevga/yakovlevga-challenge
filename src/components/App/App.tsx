import * as React from 'react';
import './App.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Switch, Route, withRouter } from 'react-router'

import { 
  MainScreen,
  ArtistsScene, ArtistScene,
  AlbumsScene, AlbumScene,
  SongsScene, SongScene, } from '../scenes/index'

import { History } from 'history';

class App extends React.Component<any, any> {

  onNavigateBack(ev: any) {
    ev.preventDefault();
    const history : History = this.props.history;
    history.goBack();
  }

  public render() {
    const { location, history } = this.props;
    const onNavigateBack = this.onNavigateBack.bind(this);

    // Нам потребуется два вида анимаций - открытие новой страницы и возврат назад
    // То, какая анимация будет использована станет известно только в момент навигации
    // Для этого навигацию по кнопке Назад я реализовал через history.goBack()
    // Пришлось немного погуглить, чтобы найти как на лету менять тип анимации CSSTransition
    // Как это провернуть описывается в этом Issue в репо react-transition.
    // https://github.com/reactjs/react-transition-group/issues/182
    // https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9

    // Мы можем детектировать был ли вызван history.goBack по значению action == POP,
    // В случае навигации через Link, значение будет == PUSH
    const transitionChildFactory = (child: React.ReactElement<any>) => 
      React.cloneElement(
        child, 
        { classNames: history.action === "PUSH" ? 'forward' : 'backward' });
      
    return (    
        <div className="App">
          <TransitionGroup childFactory={transitionChildFactory}>            
            <CSSTransition key={location.key}  classNames='forward'  timeout={300}>
                <Switch location={location}>
                  <Route exact path="/" component={MainScreen} />
                  <Route exact path="/artists" render={ (props) => <ArtistsScene onNavigateBack={onNavigateBack}/>} />
                  <Route exact path="/artists/:id" render={ (props) => <ArtistScene id={props.match.params.id} onNavigateBack={onNavigateBack}/>} />
                  <Route exact path="/albums" render={ (props) => <AlbumsScene onNavigateBack={onNavigateBack}/>} />
                  <Route exact path="/albums/:id" render={ (props) => <AlbumScene id={props.match.params.id} onNavigateBack={onNavigateBack}/>} />
                  <Route exact path="/songs" render={ (props) => <SongsScene onNavigateBack={onNavigateBack}/>} />
                  <Route exact path="/songs/:id" render={ (props) => <SongScene id={props.match.params.id} onNavigateBack={onNavigateBack}/>} />
                </Switch>
            </CSSTransition>            
          </TransitionGroup>
        </div>
    );
  }
}

export default withRouter(App);