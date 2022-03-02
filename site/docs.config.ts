export default {
  docs: [
    {
      title: '开始',
      type: 'document', // 普通文档
      children: [
        {
          title: '快速开始',
          name: 'getting-started',
          meta: { docType: 'explain' },
          path: '/vue-mobile/getting-started',
          component: () => import('@/../getting-started.md'),
        },
        {
          title: '更新日志',
          name: 'changelog',
          meta: { docType: 'explain' },
          path: '/vue-mobile/changelog',
          component: () => import('@/../CHANGELOG.md'),
        },
        {
          title: '组件概览',
          name: 'overview',
          meta: { docType: 'explain' },
          path: '/vue-mobile/overview',
          component: () => import('@/_common/docs/mobile/overview.md'),
        },
      ],
    },
    {
      title: '基础组件',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Button 按钮',
          name: 'button',
          meta: { docType: 'base' },
          path: '/vue-mobile/components/button',
          component: () => import('@/button/button.md'),
        },
        {
          title: 'Divider 分割符',
          name: 'divider',
          meta: { docType: 'base' },
          path: '/vue-mobile/components/divider',
          component: () => import('@/divider/divider.md'),
        },
        {
          title: 'Icon 图标',
          name: 'icon',
          meta: { docType: 'explain' },
          path: '/vue-mobile/components/icon',
          component: () => import('@/icon/icon.md'),
        },
      ],
    },
    {
      title: '导航',
      type: 'component',
      children: [
        {
          title: 'Navbar 导航条',
          name: 'navbar',
          meta: { docType: 'navigation' },
          path: '/vue-mobile/components/navbar',
          component: () => import('@/navbar/navbar.md'),
        },
        {
          title: 'Steps 步骤条',
          name: 'steps',
          meta: { docType: 'navigation' },
          path: '/vue-mobile/components/steps',
          component: () => import('@/steps/steps.md'),
        },
        {
          title: 'TabBar 标签栏',
          name: 'tab-bar',
          meta: { docType: 'navigation' },
          path: '/vue-mobile/components/tabbar',
          component: () => import('@/tab-bar/tab-bar.md'),
        },
        {
          title: 'Tabs 选项卡',
          name: 'tabs',
          meta: { docType: 'navigation' },
          path: '/vue-mobile/components/tabs',
          component: () => import('@/tabs/tabs.md'),
        },
        {
          title: 'DropdownMenu 下拉菜单',
          name: 'dropdown-menu',
          meta: { docType: 'navigation' },
          path: '/vue-mobile/components/dropdown-menu',
          component: () => import('@/dropdown-menu/dropdown-menu.md'),
        },
      ],
    },
    {
      title: '输入',
      type: 'component',
      children: [
        {
          title: 'CheckBox 复选框',
          name: 'checkbox',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/checkbox',
          component: () => import('@/checkbox/checkbox.md'),
        },
        {
          title: 'Input 输入框',
          name: 'input',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/input',
          component: () => import('@/input/input.md'),
        },
        {
          title: 'Textarea 多行输入框',
          name: 'textarea',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/textarea',
          component: () => import('@/textarea/textarea.md'),
        },
        {
          title: 'Picker 选择器',
          name: 'picker',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/picker',
          component: () => import('@/picker/picker.md'),
        },
        {
          title: 'DateTimePicker 时间选择器',
          name: 'date-time-picker',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/date-time-picker',
          component: () => import('@/date-time-picker/date-time-picker.md'),
        },
        {
          title: 'Radio 单选框',
          name: 'radio',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/radio',
          component: () => import('@/radio/radio.md'),
        },
        {
          title: 'Rate 评分',
          name: 'rate',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/rate',
          component: () => import('@/rate/rate.md'),
        },
        {
          title: 'Stepper 步进器',
          name: 'stepper',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/stepper',
          component: () => import('@/stepper/stepper.md'),
        },
        {
          title: 'Switch 开关',
          name: 'switch',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/switch',
          component: () => import('@/switch/switch.md'),
        },
        {
          title: 'Search 搜索框',
          name: 'search',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/search',
          component: () => import('@/search/search.md'),
        },
        {
          title: 'Fab 悬浮按钮',
          name: 'fab',
          meta: { docType: 'form' },
          path: '/vue-mobile/components/fab',
          component: () => import('@/fab/fab.md'),
        },
      ],
    },
    {
      title: '数据展示',
      type: 'component',
      children: [
        {
          title: 'Image 图片',
          name: 'image',
          meta: { docType: 'base' },
          path: '/vue-mobile/components/image',
          component: () => import('@/image/image.md'),
        },
        {
          title: 'Avatar 头像',
          name: 'avatar',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/avatar',
          component: () => import('@/avatar/avatar.md'),
        },
        {
          title: 'Badge 徽标',
          name: 'badge',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/badge',
          component: () => import('@/badge/badge.md'),
        },
        {
          title: 'CountDown 倒计时',
          name: 'count-down',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/count-down',
          component: () => import('@/count-down/count-down.md'),
        },
        {
          title: 'Tag 标签',
          name: 'tag',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/tag',
          component: () => import('@/tag/tag.md'),
        },
        {
          title: 'Collapse 折叠面板',
          name: 'collapse',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/collapse',
          component: () => import('@/collapse/collapse.md'),
        },
        {
          title: 'Cell 单元格',
          name: 'cell',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/cell',
          component: () => import('@/cell/cell.md'),
        },
        {
          title: 'SwipeCell 滑动单元格',
          name: 'swipe-cell',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/swipe-cell',
          component: () => import('@/swipe-cell/swipe-cell.md'),
        },
        {
          title: 'Swiper 轮播',
          name: 'swiper',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/swiper',
          component: () => import('@/swiper/swiper.md'),
        },
        {
          title: 'ImageViewer 图片预览',
          name: 'image-viewer',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/image-viewer',
          component: () => import('@/image-viewer/image-viewer.md'),
        },
        {
          title: 'Drawer 抽屉',
          name: 'drawer',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/drawer',
          component: () => import('@/drawer/drawer.md'),
        },
        {
          title: 'Skeleton 骨架屏',
          name: 'skeleton',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/skeleton',
          component: () => import('@/skeleton/skeleton.md'),
        },
        {
          title: 'Grid 宫格',
          name: 'grid',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/grid',
          component: () => import('@/grid/grid.md'),
        },
        {
          title: 'Sticky 吸顶容器',
          name: 'sticky',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/sticky',
          component: () => import('@/sticky/sticky.md'),
        },
        {
          title: 'List 列表',
          name: 'list',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/list',
          component: () => import('@/list/list.md'),
        },
        {
          title: 'Loading 加载中',
          name: 'loading',
          meta: { docType: 'data' },
          path: '/vue-mobile/components/loading',
          component: () => import('@/loading/loading.md'),
        }
      ],
    },
    {
      title: '消息提醒',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Progress 进度条',
          name: 'progress',
          meta: { docType: 'message' },
          path: '/vue-mobile/components/progress',
          component: () => import('@/progress/progress.md'),
        },
        {
          title: 'ActionSheet 动作面板',
          name: 'action-sheet',
          meta: { docType: 'message' },
          path: '/vue-mobile/components/actionsheet',
          component: () => import('@/action-sheet/action-sheet.md'),
        },
        {
          title: 'Toast 轻提示',
          name: 'toast',
          meta: { docType: 'message' },
          path: '/vue-mobile/components/toast',
          component: () => import('@/toast/toast.md'),
        },
        {
          title: 'Message 消息',
          name: 'message',
          meta: { docType: 'message' },
          path: '/vue-mobile/components/message',
          component: () => import('@/message/message.md'),
        },
        {
          title: 'Dialog 弹出框',
          name: 'dialog',
          meta: { docType: 'message' },
          path: '/vue-mobile/components/dialog',
          component: () => import('@/dialog/dialog.md'),
        },
        {
          title: 'Popup 弹出层',
          name: 'popup',
          meta: { docType: 'message' },
          path: '/vue-mobile/components/popup',
          component: () => import('@/popup/popup.md'),
        },
      ],
    },
  ],
};
