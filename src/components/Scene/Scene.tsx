import * as React from 'react'
import './Scene.css';

class SceneComponent extends React.Component<any, any> {
    render() {
        const {onNavigateBack, back} = this.props;

        return (
            <div className="scene">
                <nav>         
                    {back &&           
                    <a href="#" onClick={onNavigateBack}>
                        <div>{back}</div>
                    </a>}
                </nav>
                <div className="scene-body">
                    <h1>
                        <div>{this.props.title}</div>
                    </h1>
                    <div className="scene-body-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )            
    }
}

export default SceneComponent;