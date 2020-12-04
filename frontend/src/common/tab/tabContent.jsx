import React, { Component } from 'react'
import { connect } from 'react-redux'
import If from '../operator/if'

class TabContent extends Component {
    render() {
        const selected = this.props.tab.selecteds === this.props.id
        const visible = this.props.tab.visibles[this.props.id]
        return (
            <If test={visible}>
                <div id={this.props.id} className={selected ? '' : 'hide'} >
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)