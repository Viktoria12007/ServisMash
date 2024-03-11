import '../../node_modules/just-validate/dist/js/just-validate';
import Inputmask from "inputmask";
import Swiper from 'swiper';
import { Pagination, Mousewheel, HashNavigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
    // Swiper
    const swiper = new Swiper('.swiper', {
        modules: [Pagination, Mousewheel, HashNavigation, Keyboard],
        direction: 'vertical',
        mousewheel: false,
        keyboard: {
            enabled: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
            },
        },
        hashNavigation: {
            watchState: true,
        },
        breakpoints: {
            769: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
                    },
                },
            },
            1024: {
                simulateTouch: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
                    },
                },
            }
        },
    });

    // слайд advantages
    const advantagesSlideHTML = '<div class="swiper-slide" data-hash="advantages">\n' +
        '                <section class="advantages page">\n' +
        '                    <h2 class="title advantages__title">Наши преимущества</h2>\n' +
        '                    <ul class="advantages-list">\n' +
        '                        <li class="advantages-list__item">\n' +
        '                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n' +
        '                                 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '                                 <g>\n' +
        '                                   <g>\n' +
        '                                     <path d="M472.003,234.652V90.69h10.674V24.008c0-10.299-8.383-18.677-18.687-18.677h-32c-10.299,0-18.676,8.378-18.676,18.677\n' +
        '                                       v2.65h-85.305V0H183.992v26.658H98.687v-2.65c0-10.299-8.378-18.677-18.676-18.677h-32c-10.299,0-18.676,8.378-18.676,18.677\n' +
        '                                       V90.69h10.663v143.963H13.329v138.685h21.337V512h442.668V373.337h21.337V234.652H472.003z M482.644,250.679v21.305h-69.299\n' +
        '                                       v-21.305H482.644z M440.003,234.652V90.69h15.973v143.963H440.003z M431.989,21.358h32c1.467,0,2.66,1.188,2.66,2.65v50.655\n' +
        '                                       h-37.31V24.008h0C429.34,22.546,430.528,21.358,431.989,21.358z M328.008,42.684h85.305v15.973h-85.305V42.684z M264.019,16.027\n' +
        '                                       h47.963v26.636h-47.963V16.027z M200.019,16.027h47.973v26.636h-47.973V16.027z M200.019,58.69h111.963v26.636H200.019V58.69z\n' +
        '                                        M200.019,101.353h111.963v26.636H200.019V101.353z M285.324,144.016v15.973h-58.636v-15.973H285.324z M98.687,42.684h85.305\n' +
        '                                       v15.973H98.687V42.684z M88.024,90.69h10.663V74.684h85.305v69.332h26.668v32h37.332v23.987h16.027v-23.987h37.332v-32h26.658\n' +
        '                                       V74.684h85.305V90.69h10.663v143.963h-26.658v37.332h-21.305v-32H135.997v32h-21.315v-37.332H88.024V90.69z M359.987,256.011\n' +
        '                                       v15.973H152.024v-15.973H359.987z M45.361,24.008c0-1.462,1.188-2.65,2.65-2.65h32c1.462,0,2.65,1.188,2.65,2.65v50.655h-37.3\n' +
        '                                       V24.008z M71.997,90.69v143.963H56.024V90.69H71.997z M29.356,250.679h69.299v21.305H29.356V250.679z M29.356,357.31v-26.636\n' +
        '                                       h69.299v26.636H29.356z M98.655,373.337v42.642H50.693v-42.642H98.655z M461.307,495.973H50.693v-63.968h47.963v18.655\n' +
        '                                       c0,11.172,5.367,18.676,13.356,18.676h74.663c7.982,0,13.345-7.505,13.345-18.676v-18.655h29.318v-16.027h-29.318v-42.642h111.963\n' +
        '                                       v42.642h-29.318v16.027h29.318v18.655c0,11.172,5.363,18.676,13.345,18.676H400c7.982,0,13.345-7.505,13.345-18.676v-18.655\n' +
        '                                       h47.963V495.973z M200.019,357.31v-26.636h111.963v26.636H200.019z M461.307,415.979h-47.963v-42.642h47.963V415.979z\n' +
        '                                        M482.644,357.31h-69.299v-26.636h69.299V357.31z M482.645,314.647L482.645,314.647h-85.327c0,0-0.107,137.768-0.268,138.663\n' +
        '                                       h-68.772c-0.154-0.849-0.269-122.636-0.269-122.636h18.655v-16.027H165.338v16.027h18.655c0,0-0.107,121.741-0.268,122.636\n' +
        '                                       h-68.772c-0.155-0.849-0.27-138.663-0.27-138.663H29.357v-26.636h453.289V314.647z"/>\n' +
        '                                   </g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                   <g>\n' +
        '                                     <rect x="245.337" y="415.979" width="21.337" height="16.027"/>\n' +
        '                                   </g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                                                <g>\n' +
        '                                 </g>\n' +
        '                            </svg>\n' +
        '                            <p class="advantages-list__text">Высокоточные станки с ЧПУ</p>\n' +
        '                        </li>\n' +
        '                        <li class="advantages-list__item">\n' +
        '                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n' +
        '                                 viewBox="0 0 475.2 475.2" style="enable-background:new 0 0 475.2 475.2;" xml:space="preserve">\n' +
        '                                <g transform="translate(0 -540.36)">\n' +
        '                                    <g>\n' +
        '                                        <g>\n' +
        '                                            <path d="M241.7,731.76c-0.1,0-0.2,0-0.2,0h-32.6c-4.1,0-7.5,3.4-7.5,7.5v83.2H191c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h10.4\n' +
        '                                                v12.9H191c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h10.4v39c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-39H264\n' +
        '                                                c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-47.6v-12.9h25.1c27.7,0,50.2-23.5,50.2-52.5C291.7,756.06,269.8,732.66,241.7,731.76z\n' +
        '                                                 M241.5,822.46h-25.1v-75.7h25c19.8,0.7,35.3,17.5,35.3,38.2S260.9,822.46,241.5,822.46z"/>\n' +
        '                                            <path d="M442.9,803.96L442.9,803.96l-145.8-145.6c10.6-14.1,15.8-31.3,14.6-49c-1.3-18.8-9.5-36.3-23.3-49.1\n' +
        '                                                c-13.8-12.9-32-19.9-51.2-19.9c-18.9,0-36.9,7.1-50.6,20.1c-13.7,13-21.9,30.6-23.2,49.8c-0.3,4.1,2.9,7.7,7,8\n' +
        '                                                c4.1,0.3,7.7-2.9,8-7c2.1-31.8,27.4-55.8,58.8-55.8c31.9,0,57.5,23.7,59.6,55.1c0.9,13.8-3,26.8-10.3,37.3l-43.2-43.1\n' +
        '                                                c-2.9-2.9-7.7-2.9-10.6,0L32.3,804.16c-1.4,1.4-2.2,3.3-2.2,5.3s0.8,3.9,2.2,5.3l200.4,198.6c1.5,1.4,3.4,2.2,5.3,2.2\n' +
        '                                                c1.9,0,3.8-0.7,5.3-2.2l199.6-198.6c1.4-1.4,2.2-3.3,2.2-5.3C445.1,807.26,444.3,805.36,442.9,803.96z M238,997.26L238,997.26\n' +
        '                                                l-189.7-188L238,620.46l38.3,38.3c-3,2.6-6.4,4.9-9.9,6.8c-5.1-10.8-15.9-18.2-28.4-18.2c-18.2,0-32.4,14.2-32.4,32.4\n' +
        '                                                c0,17.4,14.5,31.6,32.4,31.6c17.1,0,31-13.6,31.6-30.6c6.3-2.9,12.1-6.7,17.3-11.4L427,809.26L238,997.26z M238.3,680.56\n' +
        '                                                c0.4,3.8,3.7,6.7,7.4,6.7c0.3,0,0.6,0,0.8,0c2.2-0.2,4.5-0.6,6.7-1.1c-2.6,5.9-8.5,10.2-15.3,10.2c-9.8,0-17.4-7.3-17.4-16.6\n' +
        '                                                c0-9.9,7.5-17.4,17.4-17.4c6.2,0,11.6,3.4,14.4,8.6c-2.4,0.6-4.9,1-7.4,1.3C240.8,672.76,237.9,676.46,238.3,680.56z"/>\n' +
        '                                        </g>\n' +
        '                                    </g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                                                                <g>\n' +
        '                                </g>\n' +
        '                            </svg>\n' +
        '                            <p class="advantages-list__text">Всегда лучшая цена</p>\n' +
        '                        </li>\n' +
        '                        <li class="advantages-list__item">\n' +
        '                            <svg enable-background="new 0 0 511.998 511.998" height="512" viewBox="0 0 511.998 511.998" width="512" xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <g>\n' +
        '                                    <path d="m161.592 239.367c-17.059 3.589-29.481 12.424-36.922 26.26-4.539 8.44-6.769 18.04-7.519 27.802-15.484-.834-25.682 8.633-29.296 14.708-2.118 3.56-.949 8.162 2.61 10.28 1.202.716 2.523 1.056 3.828 1.056 2.557 0 5.05-1.309 6.452-3.666.231-.387 5.129-8.363 16.309-7.355 1.486 26.043 10.63 49.56 11.229 51.075 1.165 2.946 3.987 4.742 6.975 4.742.916 0 1.849-.169 2.753-.526 3.851-1.52 5.741-5.875 4.224-9.728-8.952-22.617-15.893-59.865-4.344-81.306 5.326-9.887 14.088-15.992 26.788-18.663 10.429-2.194 19.175-5.276 26.509-8.899.514 2.939 1.304 6.155 2.505 9.41 4.079 11.055 13.576 24.638 35.653 26.573.224.02.444.028.664.028 3.846 0 7.12-2.941 7.463-6.845.361-4.127-2.69-7.765-6.816-8.127-11.455-1.004-18.896-6.38-22.746-16.437-1.958-5.112-2.491-10.245-2.612-13.424 9.778-7.684 15.569-16.295 18.995-23.75 7.394-16.083 5.606-30.382 5.526-30.982-.542-4.089-4.278-6.946-8.375-6.433-4.093.52-6.995 4.268-6.5 8.363.216 1.778 4.596 43.655-53.353 55.844z"/>\n' +
        '                                    <path d="m467.866 288.44c-10.296 0-19.062 6.676-22.196 15.927h-44.735v-40.867h14.735c3.134 9.251 11.9 15.927 22.196 15.927 12.918 0 23.427-10.509 23.427-23.427 0-12.917-10.509-23.426-23.427-23.426-10.296 0-19.062 6.676-22.196 15.926h-14.735v-40.866h44.735c3.134 9.251 11.9 15.927 22.196 15.927 12.918 0 23.427-10.509 23.427-23.427s-10.509-23.427-23.427-23.427c-10.296 0-19.062 6.676-22.196 15.927h-44.735v-.586c0-13.414-10.913-24.327-24.328-24.327h-44.208v-30.414l22.945-22.944c3.641 2.333 7.967 3.686 12.603 3.686 12.918 0 23.427-10.509 23.427-23.427s-10.509-23.427-23.427-23.427-23.427 10.508-23.427 23.426c0 2.792.491 5.472 1.392 7.958l-26.317 26.317c-1.406 1.407-2.196 3.314-2.196 5.304v33.521h-29.948v-102.252c0-17.6-7.198-34.778-19.748-47.133-12.277-12.085-28.324-18.6-45.22-18.328-22.661.357-43.644 12.992-54.762 32.978-2.312 4.152-6.762 6.589-11.57 6.38-.738-.033-1.479-.051-2.227-.051-24.337 0-45.406 18.282-49.033 42.548-21.021.055-38.108 17.174-38.108 38.208v18.901c0 4.114-1.945 7.87-5.204 10.046-13.858 9.255-22.132 24.781-22.132 41.533 0 4.954.723 9.851 2.148 14.556 1.425 4.697.155 9.821-3.5 12.956-11.051 9.481-17.39 23.309-17.39 37.937 0 11.893 4.227 23.405 11.901 32.415 3.016 3.541 3.761 8.542 1.898 12.742-2.84 6.405-4.279 13.232-4.279 20.292 0 .233.005.465.011.696l.005.2c.082 4.142 3.488 7.414 7.646 7.352 4.141-.082 7.433-3.505 7.352-7.646l-.014-.602c0-4.952 1.007-9.734 2.992-14.213 4.185-9.437 2.539-20.642-4.191-28.547-5.366-6.3-8.321-14.357-8.321-22.689 0-10.246 4.431-19.924 12.157-26.553 3.243-2.783 5.696-6.26 7.267-10.102.888.05 1.804.076 2.744.076 12.674 0 29.538-4.839 38.34-23.092 1.799-3.731.232-8.215-3.498-10.014-3.732-1.797-8.214-.233-10.014 3.498-6.326 13.122-18.708 14.8-25.91 14.548-.199-1.207-.479-2.412-.841-3.606-.998-3.292-1.504-6.726-1.504-10.204 0-11.729 5.78-22.593 15.463-29.06 7.435-4.966 11.873-13.384 11.873-22.52v-18.901c0-10.993 7.683-20.225 17.961-22.61-1.035 7.408-.916 16.884 3.755 25.02 4.878 8.496 13.384 13.715 25.282 15.511 6.972 1.052 14.162 3.591 18.095 9.477 5.063 7.572 2.693 17.492 2.681 17.546-1.046 4.008 1.356 8.104 5.364 9.149.635.166 1.271.245 1.897.245 3.331 0 6.373-2.236 7.252-5.609.126-.485 2.294-9.088-.057-18.87h9.445c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-17.459c-5.84-6.193-14.215-10.145-24.979-11.77-7.227-1.091-11.967-3.744-14.49-8.11-4.212-7.287-1.767-18.571-.081-23.548 1.693-2.048 2.858-4.577 3.277-7.404 2.52-16.979 17.222-29.782 34.199-29.782.519 0 1.034.012 1.55.035 10.558.472 20.261-4.917 25.355-14.072 8.52-15.315 24.57-24.999 41.89-25.271 12.85-.183 25.069 4.777 34.46 14.021 9.705 9.553 15.271 22.836 15.271 36.442v47.239c-10.721-3.812-27.159-6.171-42.137 5.995-4.202 3.413-8.133 4.811-12.012 4.271-7.312-1.017-12.68-8.483-12.809-8.665-2.347-3.392-6.998-4.251-10.403-1.917-3.418 2.341-4.29 7.009-1.949 10.426.908 1.326 9.267 13.009 22.938 14.991 1.312.189 2.616.285 3.916.285 6.799 0 13.435-2.597 19.775-7.748 12.056-9.791 26.358-4.564 32.68-1.39v251.686c-.334.159-.661.345-.978.559-.199.133-20.106 13.312-35.938.452-7.554-6.136-15.523-8.64-23.692-7.463-13.672 1.983-22.03 13.665-22.938 14.991-2.331 3.403-1.464 8.031 1.926 10.383 3.39 2.351 8.056 1.505 10.425-1.871.054-.076 5.445-7.644 12.811-8.668 3.884-.54 7.811.857 12.013 4.271 8.385 6.812 17.226 9.069 25.267 9.069 8.381 0 15.892-2.454 21.105-4.765v48.93c0 13.606-5.566 26.89-15.271 36.442-9.393 9.246-21.628 14.221-34.46 14.021-17.319-.272-33.37-9.956-41.891-25.272-5.094-9.153-14.79-14.54-25.357-14.071-.513.023-1.028.035-1.547.035-16.705 0-31.207-12.396-34.068-28.968.445-4.215 3.784-24.76 26.676-28.307 4.093-.634 6.897-4.466 6.263-8.56-.634-4.093-4.452-6.908-8.56-6.263-21.144 3.275-31.854 17.354-36.493 29.8-2.003-.369-3.302-.214-5.108-.25-11.497 0-20.852-9.354-20.852-20.852v-16.133c0-10.804-6.256-20.546-15.937-24.82-4.548-2.008-8.702-5.074-12.017-8.868-2.724-3.12-7.462-3.44-10.582-.715s-3.44 7.462-.715 10.582c4.747 5.436 10.714 9.835 17.255 12.724 4.249 1.876 6.995 6.232 6.995 11.098v16.133c0 19.769 16.083 35.852 35.852 35.852h2.257c.007.048.015.097.023.145 3.678 24.188 24.716 42.403 49.01 42.403.747 0 1.488-.018 2.224-.051 4.833-.218 9.262 2.228 11.573 6.379 11.117 19.986 32.101 32.622 54.762 32.979 17.025.25 33.015-6.316 45.22-18.328 12.55-12.354 19.748-29.533 19.748-47.133v-102.253h29.948v33.52c0 1.989.79 3.896 2.196 5.304l26.317 26.317c-.9 2.486-1.392 5.165-1.392 7.958 0 12.918 10.509 23.427 23.427 23.427s23.427-10.509 23.427-23.427-10.509-23.427-23.427-23.427c-4.636 0-8.962 1.354-12.603 3.686l-22.945-22.944v-30.414h21.048c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-65.996v-25.39h47.433c12.208 0 22.141-9.933 22.141-22.142v-11.249c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v11.249c0 3.938-3.203 7.142-7.141 7.142h-47.433v-65.78h47.433c3.938 0 7.141 3.203 7.141 7.141v11.249c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-11.25c0-12.208-9.933-22.141-22.141-22.141h-47.433v-25.39h89.156c5.144 0 9.328 4.185 9.328 9.327v127.904c0 3.872-2.449 7.382-6.095 8.733-3.884 1.439-5.865 5.755-4.426 9.639s5.754 5.862 9.639 4.426c9.499-3.521 15.882-12.683 15.882-22.798v-.585h44.735c3.134 9.25 11.9 15.926 22.196 15.926 12.918 0 23.427-10.509 23.427-23.426.001-12.916-10.508-23.425-23.426-23.425zm-30-40.866c4.646 0 8.427 3.779 8.427 8.426s-3.78 8.427-8.427 8.427-8.427-3.78-8.427-8.427 3.78-8.426 8.427-8.426zm30-55.868c4.646 0 8.427 3.78 8.427 8.427s-3.78 8.427-8.427 8.427-8.427-3.78-8.427-8.427 3.78-8.427 8.427-8.427zm-99.919-105.511c4.646 0 8.427 3.78 8.427 8.427s-3.78 8.427-8.427 8.427-8.427-3.78-8.427-8.427 3.78-8.427 8.427-8.427zm0 322.757c4.646 0 8.427 3.78 8.427 8.427s-3.78 8.427-8.427 8.427-8.427-3.78-8.427-8.427 3.78-8.427 8.427-8.427zm99.919-88.66c-4.646 0-8.427-3.779-8.427-8.426s3.78-8.427 8.427-8.427 8.427 3.78 8.427 8.427-3.781 8.426-8.427 8.426z"/>\n' +
        '                                </g>\n' +
        '                            </svg>\n' +
        '                            <p class="advantages-list__text">Конструкторская подготовка</p>\n' +
        '                        </li>\n' +
        '                    </ul>\n' +
        '                </section>\n' +
        '            </div>';

    // вызов reorganizationPage при первой загрузке страницы
    reorganizationPage();

    // маска телефона
    const selector = Array.from(document.querySelectorAll('input[type="tel"]'));
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(selector);

    // Прикрепить файл
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.addEventListener('change', (e) => {
        let files = e.currentTarget.files;

        if (files.length) {
            const namesFiles = [];
            files = Array.from(files);
            files.forEach((el) => {
                namesFiles.push(el.name);
            })

            fileInput.closest('label').querySelector('span').textContent = namesFiles.join(', ');
        }
        else {
            fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
        }
    });

    // валидация формы
    const validateForms = function(selector, rules) {
        new window.JustValidate(selector, {
            rules: rules,
            messages: {
                name: {
                    required: 'Как к вам можно обращаться?',
                    minLength: 'Имя должно содержать минимум 2 символа',
                    maxLength: 'Имя должно содержать не более 30 символов'
                },
                company: {
                    required: 'Как называется ваша компания?',
                    minLength: 'Название компании должно содержать минимум 2 символа',
                    maxLength: 'Название компании должно содержать не более 40 символов'
                },
                message: {
                    required: 'Пожалуйста, введите сообщение',
                    minLength: 'Ваше сообщение должно содержать минимум 5 символов',
                    maxLength: 'Ваше сообщение должно содержать не более 300 символов'
                },
                tel: {
                    required: 'Укажите ваш телефон',
                    function: 'Пожалуйста, введите правильный номер'
                },
                email: {
                    required: 'Укажите ваш e-mail',
                    email: 'Пожалуйста, введите правильный e-mail',
                    minLength: 'Ваш e-mail должен содержать минимум 6 символов',
                    maxLength: 'Ваш e-mail должен содержать не более 50 символов'
                }
            },
            submitHandler: function(form) {
                const formData = new FormData(form);
                const xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            textResultModal.innerHTML = 'Отправлено!';
                        } else {
                            textResultModal.innerHTML = 'Не отправлено! Попробуйте ещё раз!';
                        }
                        overlay.classList.add('overlay_show');
                        resultModal.classList.add('result-modal_show');
                    }
                }

                xhr.open('POST', 'mail.php', true);
                xhr.send(formData);
                form.reset();
                fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
            }
        });
    }
    validateForms('.application-form',
        { name: {required: true, minLength: 2, maxLength: 30},
            company: {required: true, minLength: 2, maxLength: 40},
            message: {required: true, minLength: 5, maxLength: 300},
            email: {required: true, email: true, minLength: 6, maxLength: 50},
            tel: {required: true, function: () => {
                for (let value of selector) {
                    const phone = value.inputmask.unmaskedvalue();
                    return Number (phone) && phone.length === 10
                }

            }} });

    // управление модалкой
    const overlay = document.querySelector('.overlay');
    const resultModal = document.querySelector('.result-modal');
    const closeResultModal = document.querySelector('.result-modal__close');
    const textResultModal = document.querySelector('.result-modal__text');
    function closeModal() {
        resultModal.classList.remove('result-modal_show');
        overlay.classList.remove('overlay_show');
    }
    closeResultModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // карта
    try {
        ymaps.ready(init);
    } catch (e) {
        console.error(e);
    }
    function init() {
        const myMap = new ymaps.Map("map", {
            center: [50.619549, 36.630674],
            zoom: 13
        });

        const myPlacemark = new ymaps.Placemark([50.619549, 36.630674], {}, {
            iconColor: '#e67008',
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        // myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.behaviors.disable(['scrollZoom']);
    }

    // мобильное меню
    const burgerButton = document.querySelector('.burger-button');
    const menuMobile = document.querySelector('.mobile-menu');
    const closeMenuMobile = document.querySelector('.mobile-menu__close-button');
    const navLinks = document.querySelectorAll('.header-list__item');
    burgerButton.addEventListener('click', () => {
        menuMobile.classList.add('show');
    });
    closeMenuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('show');
    });
    navLinks.forEach((item) => {
        item.addEventListener('click', () => {
            menuMobile.classList.remove('show');
        });
    });

    // ресайз окна
    function reorganizationPage() {
        const navList = document.querySelector('.header-nav');
        const mobileMenu = document.querySelector('.mobile-menu');
        const logoLink = document.querySelector('.logo-link');
        const contactsWrap = document.querySelector('.contacts__wrap');
        const mapWrap = document.querySelector('.contacts__map-wrap');
        const contactsList = document.querySelector('.contacts-list');
        const bannerSlide = document.querySelector('[data-hash="banner"]');
        const advantagesSlide = document.querySelector('[data-hash="advantages"]');
        function checkAdvantagesSlide () {
            if (!advantagesSlide) {
                bannerSlide.insertAdjacentHTML('afterend', advantagesSlideHTML);
            }
        }
        if (window.innerWidth >= 1025) {
            if (window.innerWidth >= 1055) {
                advantagesSlide?.remove();
            } else {
                checkAdvantagesSlide();
            }
            swiper.mousewheel.enable();
            swiper.keyboard.enable();
            logoLink.after(navList);
            contactsWrap.append(contactsList);
        } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
            checkAdvantagesSlide();
            swiper.mousewheel.disable();
            swiper.keyboard.disable();
            logoLink.after(navList);
            contactsWrap.append(contactsList);
        }
        else if (window.innerWidth > 430 && window.innerWidth <= 768) {
            checkAdvantagesSlide();
            swiper.mousewheel.disable();
            swiper.keyboard.disable();
            mobileMenu.append(navList);
            mapWrap.append(contactsList);
        }
        else {
            checkAdvantagesSlide();
            swiper.mousewheel.disable();
            swiper.keyboard.disable();
            mobileMenu.append(navList);
            mapWrap.append(contactsList);
        }
        swiper.update();
        swiper.pagination.render();
    }
    window.addEventListener('resize', () => {
        reorganizationPage();
    });
});
