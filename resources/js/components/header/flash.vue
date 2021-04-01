<template>
    <div id="js-show-msg" class="msg-slide">
        <!-- <?php debugFunction::debug('セッション変数の中身：'.print_r($_SESSION['msg_success'],true)); ?>
        <?php echo etc::getSessionFlash('msg_success'); ?> -->
    </div>
</template>

<style lang="scss" scoped>
    // フラッシュメッセージ用スタイル
    .msg-slide{
    position: absolute;
    z-index:3;
    top: 70px;
    width:100%;
    height:70px;
    border-radius: 10px;
    background: rgba(122,206,230,0.9);
    color: #fff;
    text-align: center;
    font-size:16px;
    padding: 25px 0;
    transition: all 2s;
    opacity: 0;
    //メッセージが入った際に2秒かけて表示させる為のスタイル。
    &.fade-up{
        opacity: 0.9;
    }
    }
</style>
