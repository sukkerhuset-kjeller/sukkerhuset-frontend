import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BlockContent from '@sanity/block-content-to-react';

import ContentArea from '../modules/ContentArea';
import Table from '../modules/Table';

const Page = (props) => {
  const serializers = {
    types: {
      table: (props) => <Table table={props.node.table} />,
    },
  };

  return (
    <>
      {props.page && props.page.customStyle && (
        <style>{props.page.customStyle.code}</style>
      )}
      <ContentArea>
        {props.page && (
          <>
            <h1>{props.page.title}</h1>
            {props.page.body && (
              <BlockContent
                blocks={props.page.body}
                serializers={serializers}
              />
            )}
          </>
        )}
      </ContentArea>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  page: state.pageReducer.pages.find(
    (page) => page.slug.current === ownProps.match.params.slug,
  ),
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(React.memo(Page)),
);
