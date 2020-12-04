import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from './billingCyclesList'
import Form from './billingCyclesForm'
import { create, update, remove, init } from './billingCyclesActions'

class BillingCycles extends Component {

    componentWillMount() {
       this.props.init()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' subtitle='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target='tabList' icon='bars' label='Listar' />
                            <TabHeader target='tabCreate' icon='plus' label='Incluir' />
                            <TabHeader target='tabUpdate' icon='pencil' label='Alterar' />
                            <TabHeader target='tabDelete' icon='trash-o' label='Excluir' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form classLabel='Cadastrar' classBtn='primary' onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form classLabel='Alterar' classBtn='warning' onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form classLabel='Deletar' classBtn='danger' onSubmit={this.props.remove} readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    create, update, remove, init
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)