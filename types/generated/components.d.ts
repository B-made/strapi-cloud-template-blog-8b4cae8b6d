import type { Schema, Struct } from '@strapi/strapi';

export interface EpisodeExtraContentChapter extends Struct.ComponentSchema {
  collectionName: 'components_episode_extra_content_chapters';
  info: {
    description: '';
    displayName: 'chapter';
    icon: 'oneToOne';
  };
  attributes: {
    endTime: Schema.Attribute.Integer;
    infoText: Schema.Attribute.Text;
    startTime: Schema.Attribute.Integer & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EpisodeExtraContentLessonsLearned
  extends Struct.ComponentSchema {
  collectionName: 'components_episode_extra_content_lessons_learneds';
  info: {
    displayName: 'Lessons Learned';
    icon: 'bulletList';
  };
  attributes: {
    steps: Schema.Attribute.Component<'shared.preperation-step', true>;
    summary: Schema.Attribute.Component<
      'episode-extra-content.text-section',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface EpisodeExtraContentNutritionValues
  extends Struct.ComponentSchema {
  collectionName: 'components_episode_extra_content_nutrition_values';
  info: {
    displayName: 'Nutrition Values';
    icon: 'seed';
  };
  attributes: {
    calories: Schema.Attribute.Integer;
    carbohydrates: Schema.Attribute.Integer;
    fats: Schema.Attribute.Integer;
    proteins: Schema.Attribute.Integer;
  };
}

export interface EpisodeExtraContentTextSection extends Struct.ComponentSchema {
  collectionName: 'components_episode_extra_content_text_sections';
  info: {
    displayName: 'Text Section';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ScreenContentCategoryList extends Struct.ComponentSchema {
  collectionName: 'components_screen_content_category_lists';
  info: {
    displayName: 'Category List';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ScreenContentContinueWatching extends Struct.ComponentSchema {
  collectionName: 'components_screen_content_continue_watchings';
  info: {
    displayName: 'Continue Watching';
    icon: 'rotate';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ScreenContentEpisodesList extends Struct.ComponentSchema {
  collectionName: 'components_screen_content_episodes_lists';
  info: {
    displayName: 'Episodes List';
    icon: 'bulletList';
  };
  attributes: {
    episodes: Schema.Attribute.Relation<'oneToMany', 'api::episode.episode'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ScreenContentRecommendedSeries extends Struct.ComponentSchema {
  collectionName: 'components_screen_content_recommended_series';
  info: {
    description: '';
    displayName: 'Recommended Series';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ScreenContentSeriesList extends Struct.ComponentSchema {
  collectionName: 'components_screen_content_series_lists';
  info: {
    displayName: 'Series List';
    icon: 'bulletList';
  };
  attributes: {
    series: Schema.Attribute.Relation<'oneToMany', 'api::serie.serie'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIngredient extends Struct.ComponentSchema {
  collectionName: 'components_shared_ingredients';
  info: {
    description: '';
    displayName: 'ingredients';
    icon: 'seed';
  };
  attributes: {
    ingredientName: Schema.Attribute.String;
    unitAmount: Schema.Attribute.Decimal;
    unitName: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPreperationStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_preperation_steps';
  info: {
    description: '';
    displayName: 'preperationStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPreperationStepGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_preperation_step_groups';
  info: {
    description: '';
    displayName: 'preperationStepGroup';
  };
  attributes: {
    groupTitle: Schema.Attribute.String;
    preperationSteps: Schema.Attribute.Component<
      'shared.preperation-step',
      true
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'episode-extra-content.chapter': EpisodeExtraContentChapter;
      'episode-extra-content.lessons-learned': EpisodeExtraContentLessonsLearned;
      'episode-extra-content.nutrition-values': EpisodeExtraContentNutritionValues;
      'episode-extra-content.text-section': EpisodeExtraContentTextSection;
      'screen-content.category-list': ScreenContentCategoryList;
      'screen-content.continue-watching': ScreenContentContinueWatching;
      'screen-content.episodes-list': ScreenContentEpisodesList;
      'screen-content.recommended-series': ScreenContentRecommendedSeries;
      'screen-content.series-list': ScreenContentSeriesList;
      'shared.ingredient': SharedIngredient;
      'shared.media': SharedMedia;
      'shared.preperation-step': SharedPreperationStep;
      'shared.preperation-step-group': SharedPreperationStepGroup;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
