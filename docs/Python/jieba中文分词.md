# jieba中文分词

官网：https://github.com/fxsjy/jieba

------

## 🔹 jieba 的特点

1. **三种分词模式**
   - **精确模式**：尽可能切分出最精确的结果，常用于文本分析。
   - **全模式**：把句子中所有可能的词都找出来，速度快但有冗余。
   - **搜索引擎模式**：在精确模式基础上，对长词再次切分，提高召回率，适合搜索引擎分词。
2. **支持自定义词典**
   - 可以加入自己的行业术语、专有名词，提高分词准确率。
3. **词性标注 & 关键词抽取**
   - 支持给分词结果打词性标签（如名词、动词等）。
   - 支持基于 TF-IDF 或 TextRank 的关键词提取。
4. **简单易用，安装后开箱即用**。

------

## 🔹 常见用法示例

```python
import jieba

# 示例文本
text = "我来到北京清华大学"

# 1. 精确模式
words = jieba.cut(text, cut_all=False)
print("精确模式:", "/".join(words))
# 输出: 我/来到/北京/清华大学

# 2. 全模式
words = jieba.cut(text, cut_all=True)
print("全模式:", "/".join(words))
# 输出: 我/来到/北京/清华/清华大学/华大/大学

# 3. 搜索引擎模式
words = jieba.cut_for_search(text)
print("搜索引擎模式:", "/".join(words))
# 输出: 我/来到/北京/清华/华大/大学/清华大学
```

------

## 🔹 关键词提取

```python
import jieba.analyse

text = "小明硕士毕业于中国科学院计算所，后在日本京都大学深造。"

# 提取关键词（TF-IDF）
keywords = jieba.analyse.extract_tags(text, topK=5, withWeight=True)
print("关键词:", keywords)
# 可能输出: [('京都大学', 1.2), ('中国科学院', 1.1), ('计算所', 0.9), ('硕士', 0.8), ('毕业', 0.7)]
```

------

## 🔹 词性标注

```python
import jieba.posseg as pseg

text = "我爱自然语言处理"
words = pseg.cut(text)
for word, flag in words:
    print(f"{word} ({flag})")
# 输出类似:
# 我 (r)
# 爱 (v)
# 自然语言 (n)
# 处理 (v)
```

------

总结：**jieba** 在中文分词、文本挖掘、搜索引擎、推荐系统、NLP 项目中非常常用，简单好用。