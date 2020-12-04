import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab } from './tabActions'
import If from '../operator/if'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selecteds === this.props.target
        const visible = this.props.tab.visibles[this.props.target]
        return (
            <If test={visible }>
                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;'
                        data-toggle='tab'
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}>{this.props.label}</i>
                    </a>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispath => bindActionCreators({ selectTab }, dispath)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)