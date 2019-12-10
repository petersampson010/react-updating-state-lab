import React from 'react' 

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8, 
            video: {
                resolution: '1080p'
            }
        }
    }

    handleEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })  
    }

    handleDiffEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleEvent} />
                <button className="resolution" onClick={this.handleDiffEvent} />
            </div>
        )
    }


}