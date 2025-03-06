import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
    icon: 'pencil';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Paragraph: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface NavigationChildren extends Struct.ComponentSchema {
  collectionName: 'components_navigation_children';
  info: {
    description: '';
    displayName: 'SubMenu';
    icon: 'manyWays';
  };
  attributes: {
    Grupo: Schema.Attribute.Relation<'oneToOne', 'api::group.group'>;
    Page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    Service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    Titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationItems extends Struct.ComponentSchema {
  collectionName: 'components_navigation_items';
  info: {
    description: '';
    displayName: 'Items';
    icon: 'grid';
  };
  attributes: {
    Children: Schema.Attribute.Component<'navigation.children', true>;
    Grupo: Schema.Attribute.Relation<'oneToOne', 'api::group.group'>;
    Page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    Service: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    Titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content': ContentContent;
      'navigation.children': NavigationChildren;
      'navigation.items': NavigationItems;
    }
  }
}
