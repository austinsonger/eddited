const loadDemo = function() {
  let demo = $('#loadDemo').val();

  if (demos.hasOwnProperty(demo)) {
    $('#importcfg').val(JSON.stringify(demos[demo]));
    this.importConfig();
  } else {
    return alert("Not Sure what you're trying to do...");
  }
};

const demos = {

  "default": {
    "color_accent": "#0071c5",
    "color_background": "#ffffff",
    "color_text": "#191a23",
    "color_text_subtle": "#aaaaaa",
    "color_shadow": "#f7f7f7",
    "color_border": "#eaeaea",
    "color_link": "#0071c5",
    "color_button": "#0071c5",
    "color_button_text": "#ffffff",
    "color_upvote": "#f44336",
    "color_downvote": "#0071c5",
    "color_thumbnail": "#f7f7f7",
    "color_nsfw": "#d86a62",
    "color_locked": "#ead340",
    "color_stickied": "#399b76",
    "color_visited": "#aaaaaa",
    "color_red_flair": "#d86a62",
    "color_green_flair": "#399b76",
    "width_sidebar": "300px",
    "width_thumbnail": "55px",
    "height_thumbnail": "45px",
    "hover_delay": "1.5s",
    "text_submit_link": "Show",
    "text_submit_text": "Tell",
    "text_subscribers": "Users",
    "text_here_now": "Browsing",
    "text_sub_prefix": "r/",
    "enable_header_box": true,
    "header_box_height": "150px",
    "header_box_bg_color": "#ffffff",
    "header_box_text_color": "#ffffff",
    "header_box_bg_image": true,
    "text_header_box": "r/eddited - clean. simple.",
    "enable_tabmenu_dropdown": true,
    "enable_sidebar_image": true,
    "sidebar_image_height": "206px",
    "enable_sidebar_popout": true,
    "enable_headline_box": true,
    "headline_box_bg_color": "#0071c5",
    "headline_box_text_color": "#ffffff",
    "enable_split_submit_buttons": true,
    "enable_nsfw_thumbnails": false
  },

  "noplugins": {
    "color_accent": "#0071c5",
    "color_background": "#ffffff",
    "color_text": "#191a23",
    "color_text_subtle": "#aaaaaa",
    "color_shadow": "#f7f7f7",
    "color_border": "#eaeaea",
    "color_link": "#0071c5",
    "color_button": "#0071c5",
    "color_button_text": "#ffffff",
    "color_upvote": "#f44336",
    "color_downvote": "#0071c5",
    "color_thumbnail": "#f7f7f7",
    "color_nsfw": "#d86a62",
    "color_locked": "#ead340",
    "color_stickied": "#399b76",
    "color_visited": "#aaaaaa",
    "color_red_flair": "#d86a62",
    "color_green_flair": "#399b76",
    "width_sidebar": "300px",
    "width_thumbnail": "55px",
    "height_thumbnail": "45px",
    "hover_delay": "1.5s",
    "text_submit_link": "Show",
    "text_submit_text": "Tell",
    "text_subscribers": "Users",
    "text_here_now": "Browsing",
    "text_sub_prefix": "r/",
    "enable_header_box": false,
    "header_box_height": "150px",
    "header_box_bg_color": "#ffffff",
    "header_box_text_color": "#ffffff",
    "header_box_bg_image": true,
    "text_header_box": "r/eddited - clean. simple.",
    "enable_tabmenu_dropdown": false,
    "enable_sidebar_image": false,
    "sidebar_image_height": "206px",
    "enable_sidebar_popout": false,
    "enable_headline_box": false,
    "headline_box_bg_color": "#0071c5",
    "headline_box_text_color": "#ffffff",
    "enable_split_submit_buttons": false,
    "enable_nsfw_thumbnails": false
  }

};
