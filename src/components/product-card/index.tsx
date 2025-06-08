import React from 'react';
import style from './style.css';
import * as assets from '../../assets/import';
import i18next from 'i18next';
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function productCard({ id, image, name, price, onClickAddProducts, addedCount, processor, motherboard, videocard, RAMmemory, hdd, hddMemory, ssd, powerSupplyUnit }) {
    const onAddProducts = () => {
        const obj = {
            id,
            image,
            name,
            price
        }
        onClickAddProducts(obj);
    };
    return (
        <>
            <h1 className={style.productPageTitle}>
                {name}
            </h1>
            <div className={style.containerRow}>
                <div className={style.productPageImage}>
                    <img src={assets[image]} alt="" />
                </div>
                <div className={style.productPageContent}>
                    <div className={style.productPagePrice}>
                        {price}<i><FontAwesomeIcon icon={faRubleSign} /></i>
                    </div>
                    <div>
                        <button className={style.productPageButton} onClick={onAddProducts}>{i18next.t('catalog.cards.addToCart')}{addedCount && <i className={style.addedCount}>{addedCount}</i>}</button>
                    </div>
                </div>
            </div>
            <h2 className={style.productPageDescription}>
            {i18next.t('product.page.title.description')}
            </h2>
            <p>{i18next.t('product.page.text1')} {name} {i18next.t('product.page.text2')} {videocard} {i18next.t('product.page.text3')} {name} {i18next.t('product.page.text4')} {processor}{i18next.t('product.page.text5')} {hddMemory}{i18next.t('product.page.text6')}</p>
            <h2 className={style.productPageSpecificationsTitle}>
                {i18next.t('product.page.title.specifications')}
            </h2>
            <table className={style.productPageSpecifications}>
                <tbody>
                    <tr>
                        <td className={style.specName}>
                            {i18next.t('catalog.cards.processor')}
                        </td>
                        <td className={style.specValue}>
                            {processor}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.specName}>
                            {i18next.t('catalog.cards.motherboard')}
                        </td>
                        <td className={style.specValue}>
                            {motherboard}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.specName}>
                            {i18next.t('catalog.cards.videocard')}
                        </td>
                        <td className={style.specValue}>
                            {videocard}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.specName}>
                            {i18next.t('catalog.cards.RAMmemory')}
                        </td>
                        <td className={style.specValue}>
                            {RAMmemory}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.specName}>
                            {i18next.t('catalog.cards.hdd')}
                        </td>
                        <td className={style.specValue}>
                            {hdd} {hddMemory}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.specName}>
                            {i18next.t('catalog.cards.ssd')}
                        </td>
                        <td className={style.specValue}>
                            {ssd}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.specName}>
                            {i18next.t('catalog.cards.powerSupplyUnit')}
                        </td>
                        <td className={style.specValue}>
                            {powerSupplyUnit}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default productCard;