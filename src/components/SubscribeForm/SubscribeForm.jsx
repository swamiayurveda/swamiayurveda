import React from 'react';

import './style.scss';

class SubscribeForm extends React.Component {
  render() {
    return (
      <div className="email-input-area" id="mc_embed_signup">
        <form
          action="https://github.us19.list-manage.com/subscribe/post?u=fe6d6b902feab55f744f04531&amp;id=5b8fcb37fa"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input type="email" name="EMAIL" className="email email-input" id="mce-EMAIL" placeholder="Enter Email" required />
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_fe6d6b902feab55f744f04531_5b8fcb37fa"
                tabIndex="-1"
              />
            </div>
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button submit-btn" />
          </div>
        </form>
      </div>
    );
  }
};

export default SubscribeForm;
