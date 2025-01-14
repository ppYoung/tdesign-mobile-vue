/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

 import { TdGridItemProps } from '../grid/type';
 import { PropType } from 'vue';
 
 export default {
   /** 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字 */
   badgeProps: {
     type: Object as PropType<TdGridItemProps['badgeProps']>,
   },
   /** 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点 */
   description: {
     type: [String, Function] as PropType<TdGridItemProps['description']>,
   },
   /** 图片，可以是图片地址，也可以自定义图片节点 */
   image: {
     type: [String, Function] as PropType<TdGridItemProps['image']>,
   },
   /** 内容布局方式 */
   layout: {
     type: String as PropType<TdGridItemProps['layout']>,
     default: 'vertical' as TdGridItemProps['layout'],
     validator(val: TdGridItemProps['layout']): boolean {
       return ['vertical', 'horizontal'].includes(val!);
     },
   },
   /** 文本，可以通过 Props 传入文本，也可以自定义标题节点 */
   text: {
     type: [String, Function] as PropType<TdGridItemProps['text']>,
   },
 };
 