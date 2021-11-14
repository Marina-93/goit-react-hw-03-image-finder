import { Component } from "react";
import Loader from "react-loader-spinner";
import Searchbar from './component/Searchbar/Searchbar';
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Modal from "./component/Modal/Modal";
import Button from "./component/Button/Button";
import './App.css';

export default class App extends Component {
  state = {
    BaseURL:'https://pixabay.com/api/',
    keyURL: '23510997-d251ce775a3590a28eaf32d04',
    value: '',
    page: 1,
    images: [],
    loading: false,
    status: 'idli',
    showModal: false,
    modalSrc: '',
    modalAlt: ''
  }
  
  handleFormSubmit = value => (
    this.setState({value})
  )

  componentDidUpdate(prevProps, prevState) {
    const{BaseURL, value, page, keyURL} = this.state

    if (prevState.value !== value) {
      this.setState({ status: 'pending' })
      fetch(`${BaseURL}?q=${value}&page=${page}&key=${keyURL}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then((res) => this.setState({ images: res.hits, page: page + 1, status: 'resolved' }))
    }
  }

  loadMore = () => {
    const{BaseURL, value, page, keyURL} = this.state

    this.setState((prev) => ({ page: prev.page + 1 }))
    fetch(`${BaseURL}?q=${value}&page=${page}&key=${keyURL}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then((res) => this.setState((prevState) => ({ images: [...prevState.images, ...res.hits],  status: 'resolved' })))
  }

  toggleModal = () => {
    this.setState(({ showModal }) => (
      { showModal: !showModal }
    ))
  }

  modalData = (src, alt) => {
    this.setState({ modalSrc: src,  modalAlt: alt } )
  }

  render() {
    const{status,images, showModal, modalSrc, modalAlt}=this.state

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idli' && <div>Введите назание</div>}
        {status === 'pending' && <Loader className="spin" type="Bars" color="#00BFFF" height={200} width={200} />}
        {status === 'resolved' && <ImageGallery
          images={images}
          showModal={this.toggleModal}
          modalData={this.modalData}
        />}
        {images.length !== 0 && <Button onClick={this.loadMore}/>}
        {showModal && <Modal
          onClose={this.toggleModal}
          src={modalSrc}
          alt={modalAlt}
        />}
      </div>
    )
  }
}