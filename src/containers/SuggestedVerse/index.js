
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addVerseAction } from '../../actions/verses';

import VerseCard from '../../components/VerseCard';

class SuggestedVerse extends Component { // eslint-disable-line

  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.dispatch(addVerseAction(this.props.verse));
  }

  render() {
    const { verse } = this.props;
    if (!verse) return null;
    return (
      <VerseCard
        verse={verse}
        suggested={true}
        onAdd={this.handleAdd}
      />
    );
  }
}

SuggestedVerse.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  verse: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ verses }, ownProps) => {
  // Grab the verse to display from redux or somewhere else
  let verse = ownProps.verse || verses.suggested;
  return {
    verse,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedVerse);
