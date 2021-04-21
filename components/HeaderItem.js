function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-16 md:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <div className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </div>
    </div>
  );
}

export default HeaderItem;
