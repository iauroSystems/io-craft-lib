import {Box} from '@mui/material';
import {styled} from '@mui/system';
import './icon.css';

const StyledIconComponent = styled('div')(({theme}) => {
  return {
    'gessa-icon': {
      span: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
      '.icon_span': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

    },
  };
});

const iconList = [
  'rotation_3d',
  'accessibility',
  'accessible_forward_black_24dp',
  'accessible',
  'Accommodation',
  'account_balance_black_24dp',
  'account_balance_wallet_black_24dp',
  'account_box_black_24dp',
  'account_circle_black_24dp',
  'add_alert_black_24dp',
  'addchart_black_24dp',
  'add_shopping_cart_black_24dp',
  // 'add_',
  'add',
  'add_task_black_24dp',
  'add_to_drive_black_24dp',
  'admin_panel_settings_black_24dp',
  'ads_click_black_24dp',
  'alarm_add_black_24dp',
  'alarm_black_24dp',
  'alarm_off_black_24dp',
  'alarm_on_black_24dp',
  'all_inbox_black_24dp',
  'all_out_black_24dp',
  'analytics_black_24dp',
  'anchor_black_24dp',
  'android_black_24dp',
  'announcement_black_24dp',
  'api_black_24dp',
  'app_blocking_black_24dp',
  'app_settings_alt_black_24dp',
  'apps_outage_black_24dp',
  'app',
  'arrow_back',
  'arrow_circle_down_black_24dp',
  'arrow_circle_left_black_24dp',
  'arrow_circle_right_black_24dp',
  'arrow_circle_up_black_24dp',
  'arrow_downward_black_24dp',
  'arrow_drop_down_black_24dp',
  'arrow_drop_down_circle_black_24dp',
  'arrow_drop_up_black_24dp',
  'arrow_forward_black_24dp',
  'arrow_forward_ios_black_24dp',
  'arrow_left_black_24dp',
  'arrow_right_alt_black_24dp',
  'arrow_right_black_24dp',
  'arrow',
  'arrow_upward_black_24dp',
  'article_black_24dp',
  'aspect_ratio_black_24dp',
  'assessment_black_24dp',
  'assignment_black_24dp',
  'assignment_ind_black_24dp',
  'assignment_late_black_24dp',
  'assignment_return_black_24dp',
  'assignment_returned_black_24dp',
  'assignment_turned_in_black_24dp',
  'assistant_direction_black_24dp',
  'attach_file',
  'autorenew_black_24dp',
  // 'baby-teeth (1) 1',
  'baby-teeth',
  'backup_black_24dp',
  'backup_table_black_24dp',
  'batch_prediction_black_24dp',
  'Behavior',
  'book_black_24dp',
  'bookmark_add_black_24dp',
  'bookmark_added_black_24dp',
  'bookmark_black_24dp',
  'book_online_black_24dp',
  'bug_report_black_24dp',
  'build_circle_black_24dp',
  'cached_black_24dp',
  'calendar_today_black_24dp',
  'calendar_view_day_black_24dp',
  'calendar_view_month_black_24dp',
  'calendar_view_week_black_24dp',
  'camera_enhance_black_24dp',
  'campaign_black_24dp',
  'cancel_black_24dp',
  'cancel_schedule_send_black_24dp',
  // 'Capital Risk',
  'capital-risk',
  'card_giftcard_black_24dp',
  'card_membership_black_24dp',
  'card_travel_black_24dp',
  'Care',
  'change_history_black_24dp',
  'check_black_24dp',
  'Checkbox',
  'check_circle_black_24dp',
  'chevron_left_black_24dp',
  'chevron_right_black_24dp',
  'Claims',
  'class_black_24dp',
  'Clinical',
  'close_black_24dp',
  'close_fullscreen_black_24dp',
  'code_black_24dp',
  'code_off_black_24dp',
  'Collapse',
  'color_fill',
  'comment_bank_black_24dp',
  'Communication',
  'commute_black_24dp',
  'compare_arrows_black_24dp',
  'Competition',
  'compress_black_24dp',
  'contactless_black_24dp',
  'contact_page_black_24dp',
  'contact_support_black_24dp',
  'copyright_black_24dp',
  'credit_card_black_24dp',
  'credit_card_off_black_24dp',
  'Credit',
  // 'ct-scan 1',
  'ct-scan',
  'dangerous_black_24dp',
  'dashboard_black_24dp',
  'dashboard_customize_black_24dp',
  'data_exploration_black_24dp',
  'date_range_black_24dp',
  'delete_black_24dp',
  // 'dental-care 1',
  'dental-care',
  // 'dermis 1',
  'dermis',
  'description_black_24dp',
  'Devices',
  'Diagnisis',
  'disabled_visible_black_24dp',
  'dns_black_24dp',
  'domain',
  'done_all_black_24dp',
  'donut_large_black_24dp',
  'donut_small_black_24dp',
  'double_arrow_black_24dp',
  'drag_indicator_black_24dp',
  'dynamic_form_black_24dp',
  'east_black_24dp',
  'edit_black_24dp',
  'edit_calendar_black_24dp',
  'edit_off_black_24dp',
  'eject_black_24dp',
  'equal_black_24dp',
  'error_black_24dp',
  'euro_symbol_black_24dp',
  'event_black_24dp',
  'event_seat_black_24dp',
  'exit_to_app_black_24dp',
  'expand_black_24dp',
  'expand_circle_down_black_24dp',
  'expand_less_black_24dp',
  'expand_more_black_24dp',
  'Expand',
  'explore_black_24dp',
  'explore_off_black_24dp',
  'extension_black_24dp',
  'extension_off_black_24dp',
  // 'external_link',
  'external_link',
  'face_black_24dp',
  'fact_check_black_24dp',
  'favorite_black_24dp',
  'favorite_border_black_24dp',
  'feedback_black_24dp',
  // 'file_copy_',
  'file_copy',
  // 'file_download_black_24dp (1) 1',
  'file_download_black_24dp',
  'file_present_black_24dp',
  // 'file_upload_black_24dp 1',
  'file_upload_black_24dp',
  'file_upload',
  'filter_alt_black_24dp',
  // 'Financial Risk',
  'financial-risk',
  'find_in_page_black_24dp',
  'find_replace_black_24dp',
  'fingerprint_black_24dp',
  'first_page_black_24dp',
  'fit_screen_black_24dp',
  'Fix',
  'flaky_black_24dp',
  'flight_land_black_24dp',
  'flight_takeoff_black_24dp',
  'flip_to_back_black_24dp',
  'flip_to_front_black_24dp',
  'flutter_dash_black_24dp',
  // 'font_',
  'font-icon',
  'free_cancellation_black_24dp',
  'fullscreen_black_24dp',
  'fullscreen_exit_black_24dp',
  'gavel_black_24dp',
  'generating_tokens_black_24dp',
  'get_app_black_24dp',
  'gif_black_24dp',
  'gif_box_black_24dp',
  'grade_black_24dp',
  'grading_black_24dp',
  // 'Group 1',
  'Group',
  'group_work_black_24dp',
  'g_translate_black_24dp',
  // 'Hazard Risk',
  'hazard-risk',
  // 'healthcare (2) 1',
  'healthcare',
  // 'Health Safety',
  'health-safety',
  // 'heart 1',
  'heart',
  // 'heart-rate-monitor 1',
  'heart-rate-monitor',
  'help_black_24dp',
  'help_center_black_24dp',
  'help_outline_black_24dp',
  'hide_source_black_24dp',
  'highlight_alt_black_24dp',
  'highlight_off_black_24dp',
  'history_black_24dp',
  'history_toggle_off_black_24dp',
  'home_black_24dp',
  'horizontal_split_black_24dp',
  // 'hospital (2) 1',
  'hospital1',
  // 'hospital (3) 1',
  'hospital2',
  'hotel_class_black_24dp',
  'hourglass_disabled_black_24dp',
  'hourglass_empty_black_24dp',
  'hourglass_full_black_24dp',
  'http_black_24dp',
  'https_black_24dp',
  // 'Human Capital Risk',
  'human-capital-risk',
  'important_devices_black_24dp',
  'Incident 2',
  'Incident',
  'info_black_24dp',
  'input_black_24dp',
  'integration_instructions_black_24dp',
  'invert_colors_black_24dp',
  // 'kidney 1',
  'kidney',
  'label_black_24dp',
  'label_important_black_24dp',
  'label_off_black_24dp',
  'language_black_24dp',
  // 'larynx 1',
  'larynx',
  'last_page_black_24dp',
  'leaderboard_black_24dp',
  'legend_toggle_black_24dp',
  'lightbulb_black_24dp',
  'light_mode',
  'line_style_black_24dp',
  'line_weight_black_24dp',
  // 'link_',
  'link_icon',
  'list_black_24dp',
  'Location',
  'lock_black_24dp',
  'lock_clock_black_24dp',
  'lock_open_black_24dp',
  'login_black_24dp',
  'logout_black_24dp',
  'loyalty_black_24dp',
  'Maintenance',
  // 'man (1) 1',
  'man',
  'manage_accounts_black_24dp',
  'maps_home_work_black_24dp',
  'mark_as_unread_black_24dp',
  'Mask',
  'maximize_black_24dp',
  'mediation_black_24dp',
  'Medical',
  'menu_black_24dp',
  'menu_open_black_24dp',
  'minimize_black_24dp',
  'model_training_black_24dp',
  'more_horiz_black_24dp',
  'more_vert_black_24dp',
  'Mortality 2',
  'Mortality',
  'new_label_black_24dp',
  'next_plan_black_24dp',
  'nightlight_round_black_24dp',
  'no_accounts_black_24dp',
  // 'Non - Medical',
  'non-medical',
  'north_black_24dp',
  'north_east_black_24dp',
  'north_west_black_24dp',
  'not_accessible_black_24dp',
  'note_add_black_24dp',
  'Notification_24dp',
  'notification_important_black_24dp',
  'not_started_black_24dp',
  'Nutrition',
  'offline_bolt_black_24dp',
  'offline_pin_black_24dp',
  'offline_share_black_24dp',
  'online_prediction_black_24dp',
  'opacity_black_24dp',
  'open_in_browser_black_24dp',
  'open_in_full_black_24dp',
  'open_in_new_black_24dp',
  'open_in_new_off_black_24dp',
  'open_with_black_24dp',
  // 'Operation Risk',
  'operation-risk',
  'Organization',
  // 'orthopedics 1',
  'orthopedics',
  'outbound_black_24dp',
  'outbox_black_24dp',
  'outlet_black_24dp',
  'pageview_black_24dp',
  'paid_black_24dp',
  'pan_tool_black_24dp',
  'Patient Safety',
  'Patient',
  // 'pause_black_24dp 1',
  'pause_black_24dp',
  'payment_black_24dp',
  'payments_black_24dp',
  // 'pediatrics 1',
  'pediatrics',
  'pending_actions_black_24dp',
  'pending_black_24dp',
  'People',
  'perm_camera_mic_black_24dp',
  'perm_contact_calendar_black_24dp',
  'perm_data_setting_black_24dp',
  'perm_device_information_black_24dp',
  'perm_identity_black_24dp',
  'perm_media_black_24dp',
  'perm_phone_msg_black_24dp',
  'perm_scan_wifi_black_24dp',
  'pets_black_24dp',
  'picture_in_picture_alt_black_24dp',
  'picture_in_picture_black_24dp',
  'pin_end_black_24dp',
  'pin_invoke_black_24dp',
  'pivot_table_chart_black_24dp',
  'plagiarism_black_24dp',
  'Planning',
  'play_circle_filled_black_24dp',
  'play_for_work_black_24dp',
  'polymer_black_24dp',
  'power_settings_new_black_24dp',
  'pregnant_woman_black_24dp',
  'preview_black_24dp',
  'print_black_24dp',
  'privacy_tip_black_24dp',
  'private_connectivity_black_24dp',
  'production_quantity_limits_black_24dp',
  'Public',
  'published_with_changes_black_24dp',
  'Quality of Care',
  'Quality',
  'query_builder_black_24dp',
  'question_answer_black_24dp',
  'quickreply_black_24dp',
  'receipt_black_24dp',
  'record_voice_over_black_24dp',
  'redeem_black_24dp',
  'refresh_black_24dp',
  'remove_done_black_24dp',
  'remove_shopping_cart_black_24dp',
  'reorder_black_24dp',
  'report_problem_black_24dp',
  'request_page_black_24dp',
  'restore_black_24dp',
  'restore_from_trash_black_24dp',
  'restore_page_black_24dp',
  'Risk',
  'rounded_corner_black_24dp',
  'rule_black_24dp',
  'Safety',
  'saved_search_black_24dp',
  'savings_black_24dp',
  'schedule_send_black_24dp',
  'search_black_24dp',
  'search_off_black_24dp',
  'segment_black_24dp',
  'send_and_archive_black_24dp',
  'sensors_black_24dp',
  'sensors_off_black_24dp',
  'settings_accessibility_black_24dp',
  'settings_applications_black_24dp',
  'settings_backup_restore_black_24dp',
  'settings_black_24dp',
  'settings_bluetooth_black_24dp',
  'settings_brightness_black_24dp',
  'settings_cell_black_24dp',
  'settings_ethernet_black_24dp',
  'settings_input_antenna_black_24dp',
  'settings_input_component_black_24dp',
  'settings_input_composite_black_24dp',
  'settings_input_hdmi_black_24dp',
  'settings_input_svideo_black_24dp',
  'settings_overscan_black_24dp',
  'settings_phone_black_24dp',
  'settings_power_black_24dp',
  'settings_remote_black_24dp',
  'settings_voice_black_24dp',
  'share',
  'shop_2_black_24dp',
  'shop_black_24dp',
  'shopping_bag_black_24dp',
  'shopping_basket_black_24dp',
  'shopping_cart_black_24dp',
  'shop_two_black_24dp',
  'smart_button_black_24dp',
  'Sort_24dp',
  'Sort',
  'source_black_24dp',
  'south_black_24dp',
  'south_east_black_24dp',
  'south_west_black_24dp',
  'space_dashboard_black_24dp',
  'speaker_notes_black_24dp',
  'speaker_notes_off_black_24dp',
  'spellcheck_black_24dp',
  'Staff',
  'star_black_24dp',
  'star_border_black_24dp',
  'stars_black_24dp',
  'sticky_note_2_black_24dp',
  'store_black_24dp',
  'subdirectory_arrow_left_black_24dp',
  'subdirectory_arrow_right_black_24dp',
  'subject_black_24dp',
  'subtitles_off_black_24dp',
  'supervised_user_circle_black_24dp',
  'supervisor_account_black_24dp',
  'support_black_24dp',
  'swap_horiz_black_24dp',
  'swap_horizontal_circle_black_24dp',
  'swap_vert_black_24dp',
  'swap_vertical_circle_black_24dp',
  'swipe_black_24dp',
  'switch_access_shortcut_add_black_24dp',
  'switch_access_shortcut_black_24dp',
  'switch_right_black_24dp',
  'sync_alt_black_24dp',
  'system_update_alt_black_24dp',
  'tab_black_24dp',
  'table_view_black_24dp',
  'tab_unselected_black_24dp',
  'task_alt_black_24dp',
  'text_rotate_vertical_black_24dp',
  'text_rotation_none_black_24dp',
  'theaters_black_24dp',
  'thumb_down_black_24dp',
  'thumb_down_off_alt_black_24dp',
  'thumbs_up_down_black_24dp',
  'thumb_up_black_24dp',
  'thumb_up_off_alt_black_24dp',
  'timeline_black_24dp',
  'tips_and_updates_black_24dp',
  'toc_black_24dp',
  'today_black_24dp',
  'token_black_24dp',
  'toll_black_24dp',
  'touch_app_black_24dp',
  'tour_black_24dp',
  'track_changes_black_24dp',
  'translate_black_24dp',
  'trending_down_black_24dp',
  'trending_flat_black_24dp',
  'trending_up_black_24dp',
  'try_black_24dp',
  'turned_in_black_24dp',
  'turned_in_not_black_24dp',
  'unfold_less_black_24dp',
  'unfold_more_black_24dp',
  'unpublished_black_24dp',
  'update_black_24dp',
  'update_disabled_black_24dp',
  'upgrade_black_24dp',
  'verified_black_24dp',
  'verified_user_black_24dp',
  'vertical_split_black_24dp',
  'view_agenda_black_24dp',
  'view_array_black_24dp',
  'view_carousel_black_24dp',
  'view_column_black_24dp',
  'view_day_black_24dp',
  'view_headline_black_24dp',
  'view_in_ar_black_24dp',
  'view_list_black_24dp',
  'view_module_black_24dp',
  'view_quilt_black_24dp',
  'view_sidebar_black_24dp',
  'view_stream_black_24dp',
  'view_week_black_24dp',
  'visibility_black_24dp',
  'visibility_off_black_24dp',
  'voice_over_off_black_24dp',
  'warning_black_24dp',
  'watch_later_black_24dp',
  'waterfall_chart_black_24dp',
  'west_black_24dp',
  'wifi_protected_setup_black_24dp',
  'work_black_24dp',
  'work_off_black_24dp',
  'work_outline_black_24dp',
  'wysiwyg_black_24dp',
  'youtube_searched_for_black_24dp',
  'zoom_in_black_24dp',
  'zoom_out_black_24dp',
  'DiamondSolid',
  'Dot',
  'star-solid',
  'star-half-solid',
];

export function Icon(props: any) {
  return (
    <StyledIconComponent>
      <Box
        style={{
          display: 'flex',
          width: '100%',
          flexFlow: 'row wrap',
        }}

      >
        {iconList.map((icon: any, index: any) => {
          return (
            <Box
              className="icon-div"
              key={index}
              style={{
                margin: ' 10px',
                backgroundColor:
                  props.style === 'boxed' ? '#848B96' + '50' : 'transparent',
                height: '30px',
                width: '30px',
                color: '#848B96',
              }}
              title={props.label ? props.label : icon}
            >
              <span
                className={'icon-span icon-' + icon}
                style={{
                  height: '30px',
                  width: '30px',
                  fontSize: 30 - 8 + 'px',
                }}
              ></span>
            </Box>
          );
        })}
      </Box>
    </StyledIconComponent>
  );
}

export default Icon;
