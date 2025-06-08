import { getNavigations } from '@ijl/cli'

const navigations = getNavigations('project_pcm');

export const baseUrl = navigations['project_pcm']

export const URLs = {
    home: {
        url: navigations['link.project_pcm.home'],
    },
    basket: {
        url: navigations['link.project_pcm.basket'],
    },
    catalog: {
        url: navigations['link.project_pcm.catalog'],
    },
    productPage: {
        url: navigations['link.project_pcm.product.id'],
    },
    order: {
        url: navigations['link.project_pcm.order'],
    }
}