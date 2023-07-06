import {Box} from '@mui/material';
import React, {useState} from 'react';
// import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
// import { IconComponent } from '../../POC/icon-component/icon-component';
import CustomTooltip from '../tooltip/tooltip';
import './rating.css';

export interface RatingProps {
  size?: 'small' | 'medium' | 'large';
  value: number;
  onChange: (value: number) => void;
  hoverStatus?: boolean;
  disabled?: boolean;
  precision?: boolean;
}

export function RatingComponent({
                                  size = 'medium',
                                  precision,
                                  value = 0,
                                  onChange,
                                  hoverStatus,
                                  disabled = false,
                                }: RatingProps) {
  let sizeRating = {
    width: '23px',
  };
  if (size === 'small') {
    sizeRating = {
      width: '21px',
    };
  }
  if (size === 'large') {
    sizeRating = {
      width: '25px',
    };
  }

  // const [rating, setRating] = useState(value);
  const [hover, setHover] = useState<any>(null);

  return (
    <Box>
      {precision ? (
        <Box className="halfRatingContainer">
          <CustomTooltip
            title={hoverStatus ? 'Terrible' : ''}
            placement="top-start"
            arrow
          >
            <Box className="fullHalfStarContainer">
              <label>
                <span className="halfleftStarContainer">
                  <svg
                    //   className="halfLeftStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 0.1
                          ? 'activeHalfLeftStar'
                          : 'halfLeftStar'
                    }
                    onMouseEnter={() => setHover(0.5)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  value="0.5"
                  onChange={() => onChange(0.5)}
                  disabled={disabled}
                />
              </label>

              <label>
                <span className="halfRightStarContainer">
                  <svg
                    //   className="halfRightStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 0.6
                          ? 'activeHalfRightStar'
                          : 'halfRightStar'
                    }
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(1)}
                  value="1"
                  disabled={disabled}
                />
              </label>
            </Box>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Bad' : ''}
            placement="top-start"
            arrow
          >
            <Box className="fullHalfStarContainer">
              <label>
                <span className="halfleftStarContainer">
                  <svg
                    //   className="halfLeftStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 1.1
                          ? 'activeHalfLeftStar'
                          : 'halfLeftStar'
                    }
                    onMouseEnter={() => setHover(1.5)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(1.5)}
                  value="1.5"
                  disabled={disabled}
                />
              </label>

              <label>
                <span className="halfRightStarContainer">
                  <svg
                    //   className="halfRightStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 1.6
                          ? 'activeHalfRightStar'
                          : 'halfRightStar'
                    }
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(2)}
                  value="2"
                  disabled={disabled}
                />
              </label>
            </Box>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Average' : ''}
            placement="top"
            arrow
          >
            <Box className="fullHalfStarContainer">
              <label>
                <span className="halfleftStarContainer">
                  <svg
                    //   className="halfLeftStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 2.1
                          ? 'activeHalfLeftStar'
                          : 'halfLeftStar'
                    }
                    onMouseEnter={() => setHover(2.5)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(2.5)}
                  value="2.5"
                  disabled={disabled}
                />
              </label>

              <label>
                <span className="halfRightStarContainer">
                  <svg
                    //   className="halfRightStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 2.6
                          ? 'activeHalfRightStar'
                          : 'halfRightStar'
                    }
                    onMouseEnter={() => setHover(3)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(3)}
                  value="3"
                  disabled={disabled}
                />
              </label>
            </Box>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Good' : ''}
            placement="top-end"
            arrow
          >
            <Box className="fullHalfStarContainer">
              <label>
                <span className="halfleftStarContainer">
                  <svg
                    //   className="halfLeftStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 3.1
                          ? 'activeHalfLeftStar'
                          : 'halfLeftStar'
                    }
                    onMouseEnter={() => setHover(3.5)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(3.5)}
                  value="3.5"
                  disabled={disabled}
                />
              </label>

              <label>
                <span className="halfRightStarContainer">
                  <svg
                    //   className="halfRightStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 3.6
                          ? 'activeHalfRightStar'
                          : 'halfRightStar'
                    }
                    onMouseEnter={() => setHover(4)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(4)}
                  value="4"
                  disabled={disabled}
                />
              </label>
            </Box>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Excellent' : ''}
            placement="top-end"
            arrow
          >
            <Box className="fullHalfStarContainer">
              <label>
                <span className="halfleftStarContainer">
                  <svg
                    //   className="halfLeftStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 4.1
                          ? 'activeHalfLeftStar'
                          : 'halfLeftStar'
                    }
                    onMouseEnter={() => setHover(4.5)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(4.5)}
                  value="4.5"
                  disabled={disabled}
                />
              </label>

              <label>
                <span className="halfRightStarContainer">
                  <svg
                    //   className="halfRightStar"

                    className={
                      disabled
                        ? 'disabledHalfRating'
                        : (hover || value) >= 4.6
                          ? 'activeHalfRightStar'
                          : 'halfRightStar'
                    }
                    onMouseEnter={() => setHover(5)}
                    onMouseLeave={() => setHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                  </svg>
                </span>
                <input
                  type="radio"
                  className="ratingRadio"
                  name="ratingRadio"
                  onChange={() => onChange(5)}
                  value="5"
                  disabled={disabled}
                />
              </label>
            </Box>
          </CustomTooltip>
        </Box>
      ) : (
        <Box className="ratingContainer">
          <CustomTooltip
            title={hoverStatus ? 'Terrible' : ''}
            placement="top-start"
            arrow
          >
            <label>
              <svg
                className={
                  disabled
                    ? 'disabledRating'
                    : (hover || value) >= 1
                      ? 'activeRatingItem'
                      : 'ratingItem'
                }
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(null)}
                style={{...sizeRating}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
              </svg>
              <input
                type="radio"
                name="ratingRadio"
                onChange={() => onChange(1)}
                className="ratingRadio"
                value="1"
                disabled={disabled}
              />
            </label>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Bad' : ''}
            placement="top-start"
            arrow
          >
            <label>
              <svg
                className={
                  disabled
                    ? 'disabledRating'
                    : (hover || value) >= 2
                      ? 'activeRatingItem'
                      : 'ratingItem'
                }
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(null)}
                style={{...sizeRating}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
              </svg>
              <input
                type="radio"
                name="ratingRadio"
                onChange={() => onChange(2)}
                className="ratingRadio"
                value="1"
                disabled={disabled}
              />
            </label>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Average' : ''}
            placement="top-start"
            arrow
          >
            <label>
              <svg
                className={
                  disabled
                    ? 'disabledRating'
                    : (hover || value) >= 3
                      ? 'activeRatingItem'
                      : 'ratingItem'
                }
                onMouseEnter={() => setHover(3)}
                onMouseLeave={() => setHover(null)}
                style={{...sizeRating}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
              </svg>
              <input
                type="radio"
                name="ratingRadio"
                onChange={() => onChange(3)}
                className="ratingRadio"
                value="1"
                disabled={disabled}
              />
            </label>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Good' : ''}
            placement="top-start"
            arrow
          >
            <label>
              <svg
                className={
                  disabled
                    ? 'disabledRating'
                    : (hover || value) >= 4
                      ? 'activeRatingItem'
                      : 'ratingItem'
                }
                onMouseEnter={() => setHover(4)}
                onMouseLeave={() => setHover(null)}
                style={{...sizeRating}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
              </svg>
              <input
                type="radio"
                name="ratingRadio"
                onChange={() => onChange(4)}
                className="ratingRadio"
                value="1"
                disabled={disabled}
              />
            </label>
          </CustomTooltip>

          <CustomTooltip
            title={hoverStatus ? 'Excellent' : ''}
            placement="top-start"
            arrow
          >
            <label>
              <svg
                className={
                  disabled
                    ? 'disabledRating'
                    : (hover || value) >= 5
                      ? 'activeRatingItem'
                      : 'ratingItem'
                }
                onMouseEnter={() => setHover(5)}
                onMouseLeave={() => setHover(null)}
                style={{...sizeRating}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
              </svg>
              <input
                type="radio"
                name="ratingRadio"
                onChange={() => onChange(5)}
                className="ratingRadio"
                value="1"
                disabled={disabled}
              />
            </label>
          </CustomTooltip>
        </Box>
      )}
    </Box>
  );
}

export default RatingComponent;
