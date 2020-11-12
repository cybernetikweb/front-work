<script>
	export let checked;
</script>

<style type="text/scss">
	span {
		border-radius: 3px;
		position: absolute;
		top: 2px;
		left: 100%;
		height: 15px;
		width: 15px;
		background-color: #eee;
		cursor: pointer;
	    &:hover {
		background-color: #ccc;
	}

	    &:after {
		content: '';
		position: absolute;
		display: none;
	}
	}

	.checkmark-checked {
		background: -webkit-linear-gradient(#ff1900, #f5af19);
      &:after {
        display: block;
        position: absolute;
        top: 2px;
        left: 5px;
        width: 3px;
        height: 6px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
	}
</style>

<span class:checkmark-checked={checked}></span>
