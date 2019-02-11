import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../../pages/components/related'
import ModalContainer from '../../widgets/container/modal-container'
import Modal from '../../widgets/components/modal'

class Home extends Component {
  state = {
    modalVisible: false,
    handleError: false,
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }
  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    })
  }
  render() {
    if(this.state.handleError){
      return <p>There's an error:c</p>
    }
    return(
      <HomeLayout>
        <Related/>
        <Categories 
        categories={this.props.data.categories}
        handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <h1>Esto es un Portal</h1>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home;