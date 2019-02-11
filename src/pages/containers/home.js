import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../../pages/components/related'
import ModalContainer from '../../widgets/container/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../errors/containers/handle-error'

class Home extends Component {
  state = {
    modalVisible: false,
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
  render() {
    return(
      <HandleError>
       <HomeLayout>
        <Related/>
        <Categories 
        categories={this.props.data.}
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
      </HandleError>
    )
  }
}

export default Home;