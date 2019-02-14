import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../../pages/components/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../errors/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media //si el valor de la key se llama igual, solo lo pongo una vez. Sugar syntax baby
    })
    // console.log(this.state.media.src)
  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
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
                <VideoPlayer
                  autoplay={false}
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
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