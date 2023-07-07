import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import TreeView, { TreeViewProps } from './tree-view';

const handleEvent = () => {};

export default {
  component: TreeView,
  title: 'Organisms/TreeView',
  argTypes: {
    onClick: { action: handleEvent },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<TreeViewProps> = (args) => <TreeView {...args} />;

export const TreeViewWithAction = Template.bind({});

TreeViewWithAction.args = {
  addNewNode: true,
  data: [
    {
      _id: '61af03c6767507b150a39b37',
      name: 'Parent1',
      type: 'Parent1',
      children: [
        {
          name: 'child 1',
          type: 'child 1',
          _id: '61af0496767507b150a39b67',
          children: [],
        },
      ],
    },
    {
      _id: '61af03c6767507b150a39b38',
      name: 'Parent2',
      type: 'Parent2',
      children: [
        {
          name: 'child1',
          type: 'Pipelines',
          _id: '61af043b767507b150a39b3f',
          children: [
            {
              name: 'child a',
              type: 'child a',
              _id: '61af043b767507b150a39b40',
              children: [],
            },
          ],
        },
      ],
    },
  ],
  addContentTreeItem: function (parentId: string, newNodeText: string) {
    const dataHandler = (subData: any) => {
      if (subData._id === parentId) {
        subData.children.push({
          name: newNodeText,
          type: 'Pipelines',
          _id: '61af043b767507b150a39b3fasas',
          children: [],
        });
      } else if (subData.children.length) {
        subData.children.forEach(dataHandler);
      }
    };

    this.data?.forEach(dataHandler);
  },
};
TreeViewWithAction.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=807%3A31298&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
