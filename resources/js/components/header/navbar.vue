<template>
    <nav class="menuAbout">
        <ul class="menuAbout__itemWrap">
        <li class="menuAbout__itemWrap-item"><a class="menuLink-color" href="./mypage.php">マイページ</a></li>
        <li class="menuAbout__itemWrap-item">お気に入りレビュー一覧</li>
        <li class="menuAbout__itemWrap-item"><a class="menuLink-color" href="./revliReviewList.php">投稿されたレビュー一覧</a></li>
        <li class="menuAbout__itemWrap-item"><a class="menuLink-color" href="./browsingHistory.php">閲覧履歴</li>
        <li class="menuAbout__itemWrap-item"><a class="menuLink-color" href="./employeeRegistration.php">投稿者登録</a></li>
        <li class="menuAbout__itemWrap-item">登録社員一覧</li>
        <li class="menuAbout__itemWrap-item"><a class="menuLink-color" href="./passwordReminder.php">パスワード変更</a></li>
        <li class="menuAbout__itemWrap-item"><a class="menuLink-color" href="./reviewCompanyRegistration.php">レビュー会社登録申請</li>
        <li class="menuAbout__itemWrap-item"><a class="menuLink-color" href="./withdrawal.php">退会する</a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
  /* jsの処理によって付属されるクラス */
    .active{
        position: fixed;
        z-index:2;
    }
</style>
