import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }

  state = {
    editing: false,
    name: '',
    phone: ''
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.editing && !nextState.editing &&
      nextProps.info === this.props.info) {
      return false;
    }
    return true;
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  // editing 값을 반전시키는 함수
  // true -> false, false -> true
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // editing 값이 바뀔 때 처리할 로직들
    // 수정을 눌르면 기존의 값이 input에 나타나고
    // 수정을 적용하면 input의 값들이 부모한테 전달
    const { info, onUpdate } = this.props;
    if(!prevState.editing && this.state.editing) {
      // editing 값이 fasle -> true로 전환될때, info의 값을 state에
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.editing && !this.state.editing) {
      // true -> false
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const { editing } = this.state;
    // 수정모드
    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name='name'
              placeholder='이름'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name='phone'
              placeholder='전화번호'
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }

    // 일반모드
    const { name, phone } = this.props.info;
    
    return(
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;